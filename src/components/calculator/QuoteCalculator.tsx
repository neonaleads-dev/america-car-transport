"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Flag, ArrowDownUp, Phone, Lock, CheckCircle2, Car, Calendar, Loader2, Plus, Trash2, X } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

interface LocationData {
  city: string;
  state: string;
  lat: number;
  lon: number;
}

interface Vehicle {
  id: number;
  year: string;
  make: string;
  model: string;
  condition: string;
}

// Haversine formula to calculate miles between two coordinates
function getDistanceMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 3958.8; // Earth radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

const TOP_MAKES = [
  "Acura", "Alfa Romeo", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", 
  "Dodge", "FIAT", "Ford", "GMC", "Honda", "Hyundai", "INFINITI", "Jaguar", "Jeep", 
  "Kia", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "Mercedes-Benz", 
  "MINI", "Mitsubishi", "Nissan", "Porsche", "Ram", "Subaru", "Tesla", "Toyota", 
  "Volkswagen", "Volvo"
];

// Top 50 major US cities for the datalist autocomplete
const US_CITIES = [
  "New York, NY 10001", "Los Angeles, CA 90001", "Chicago, IL 60601", "Houston, TX 77001", 
  "Phoenix, AZ 85001", "Philadelphia, PA 19101", "San Antonio, TX 78201", "San Diego, CA 92101", 
  "Dallas, TX 75201", "San Jose, CA 95101", "Austin, TX 78701", "Jacksonville, FL 32201", 
  "Fort Worth, TX 76101", "Columbus, OH 43201", "Charlotte, NC 28201", "San Francisco, CA 94101", 
  "Indianapolis, IN 46201", "Seattle, WA 98101", "Denver, CO 80201", "Washington, DC 20001", 
  "Boston, MA 02101", "El Paso, TX 79901", "Nashville, TN 37201", "Detroit, MI 48201", 
  "Oklahoma City, OK 73101", "Portland, OR 97201", "Las Vegas, NV 89101", "Memphis, TN 38101", 
  "Louisville, KY 40201", "Baltimore, MD 21201", "Milwaukee, WI 53201", "Albuquerque, NM 87101", 
  "Tucson, AZ 85701", "Fresno, CA 93701", "Mesa, AZ 85201", "Sacramento, CA 95801", 
  "Atlanta, GA 30301", "Kansas City, MO 64101", "Colorado Springs, CO 80901", "Omaha, NE 68101", 
  "Raleigh, NC 27601", "Miami, FL 33101", "Long Beach, CA 90801", "Virginia Beach, VA 23450", 
  "Oakland, CA 94601", "Minneapolis, MN 55401", "Tulsa, OK 74101", "Tampa, FL 33601", 
  "Arlington, TX 76001", "New Orleans, LA 70112"
];

const YEARS = Array.from(new Array(47), (val, index) => new Date().getFullYear() + 1 - index);

export default function QuoteCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    zipFrom: "", // Contains the raw input (e.g. "Miami, FL 33101" or "33101")
    zipTo: "",
    transportType: "open",
    vehicles: [{ id: Date.now(), year: "", make: "", model: "", condition: "running" }],
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    consent: false,
  });

  const [locationFrom, setLocationFrom] = useState<LocationData | null>(null);
  const [locationTo, setLocationTo] = useState<LocationData | null>(null);
  const [loadingFrom, setLoadingFrom] = useState(false);
  const [loadingTo, setLoadingTo] = useState(false);

  const inputRefFrom = useRef<HTMLInputElement>(null);
  const inputRefTo = useRef<HTMLInputElement>(null);

  // Caching fetched models: { "Ford": ["Mustang", "F-150", ...], ... }
  const [modelsCache, setModelsCache] = useState<Record<string, string[]>>({});
  const [fetchingModels, setFetchingModels] = useState<Record<string, boolean>>({});

  // Helper to extract 5 digits from a string (e.g. from "Miami, FL 33101")
  const extractZip = (str: string) => {
    const match = str.match(/\b\d{5}\b/);
    return match ? match[0] : str.replace(/\D/g, '').substring(0, 5);
  };

  // Fetch Location for ZipFrom
  useEffect(() => {
    const zip = extractZip(formData.zipFrom);
    if (zip.length === 5) {
      setLoadingFrom(true);
      fetch(`https://api.zippopotam.us/us/${zip}`)
        .then((res) => {
          if (!res.ok) throw new Error("Invalid Zip");
          return res.json();
        })
        .then((data) => {
          const place = data.places[0];
          setLocationFrom({ 
            city: place["place name"], 
            state: place["state abbreviation"],
            lat: parseFloat(place.latitude),
            lon: parseFloat(place.longitude)
          });
        })
        .catch(() => setLocationFrom(null))
        .finally(() => setLoadingFrom(false));
    } else {
      setLocationFrom(null);
    }
  }, [formData.zipFrom]);

  // Fetch Location for ZipTo
  useEffect(() => {
    const zip = extractZip(formData.zipTo);
    if (zip.length === 5) {
      setLoadingTo(true);
      fetch(`https://api.zippopotam.us/us/${zip}`)
        .then((res) => {
          if (!res.ok) throw new Error("Invalid Zip");
          return res.json();
        })
        .then((data) => {
          const place = data.places[0];
          setLocationTo({ 
            city: place["place name"], 
            state: place["state abbreviation"],
            lat: parseFloat(place.latitude),
            lon: parseFloat(place.longitude)
          });
        })
        .catch(() => setLocationTo(null))
        .finally(() => setLoadingTo(false));
    } else {
      setLocationTo(null);
    }
  }, [formData.zipTo]);

  // Fetch Models from NHTSA API
  const fetchModels = async (make: string) => {
    if (!make || modelsCache[make] || fetchingModels[make]) return;

    setFetchingModels(prev => ({ ...prev, [make]: true }));
    try {
      const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(make)}?format=json`);
      const data = await res.json();
      if (data && data.Results) {
        const modelNames = data.Results.map((r: any) => r.Model_Name);
        // Deduplicate and sort alphabetically
        const uniqueModels = Array.from(new Set(modelNames)).sort() as string[];
        setModelsCache(prev => ({ ...prev, [make]: uniqueModels }));
      }
    } catch (error) {
      console.error("Failed to fetch models", error);
    } finally {
      setFetchingModels(prev => ({ ...prev, [make]: false }));
    }
  };

  const handleSwap = () => {
    setFormData((prev) => ({
      ...prev,
      zipFrom: prev.zipTo,
      zipTo: prev.zipFrom,
    }));
    const tempLoc = locationFrom;
    setLocationFrom(locationTo);
    setLocationTo(tempLoc);
  };

  const clearFrom = () => {
    setFormData(prev => ({ ...prev, zipFrom: "" }));
    setLocationFrom(null);
    if (inputRefFrom.current) inputRefFrom.current.focus();
  };

  const clearTo = () => {
    setFormData(prev => ({ ...prev, zipTo: "" }));
    setLocationTo(null);
    if (inputRefTo.current) inputRefTo.current.focus();
  };

  const handleNext = () => {
    if (step === 3 && quoteData) {
      fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          locationFrom,
          locationTo,
          calculatedPrice: quoteData.price,
          distance: quoteData.distance,
        }),
      }).catch((err) => console.error("Error dispatching lead:", err));
    }
    setStep((s) => Math.min(s + 1, 4) as Step);
  };
  const handleBack = () => setStep((s) => Math.max(s - 1, 1) as Step);

  // Vehicle Management
  const addVehicle = () => {
    setFormData(prev => ({
      ...prev,
      vehicles: [...prev.vehicles, { id: Date.now(), year: "", make: "", model: "", condition: "running" }]
    }));
  };

  const removeVehicle = (id: number) => {
    if (formData.vehicles.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      vehicles: prev.vehicles.filter(v => v.id !== id)
    }));
  };

  const updateVehicle = (id: number, field: keyof Vehicle, value: string) => {
    setFormData(prev => ({
      ...prev,
      vehicles: prev.vehicles.map(v => {
        if (v.id === id) {
          const updated = { ...v, [field]: value };
          // If Make changes, reset Model and fetch new models
          if (field === 'make') {
            updated.model = "";
            fetchModels(value);
          }
          return updated;
        }
        return v;
      })
    }));
  };

  const isVehiclesValid = () => {
    return formData.vehicles.every(v => v.year && v.make && v.model);
  };

  const calculateQuote = (): { price: number; distance: number } | null => {
    if (!locationFrom || !locationTo) return null;
    
    // 1. Calculate physical distance
    const distance = getDistanceMiles(locationFrom.lat, locationFrom.lon, locationTo.lat, locationTo.lon);
    
    // 2. Base rate is roughly $1.20 per mile for open transport, with a $350 base minimum.
    // Long distances get a slight bulk discount (e.g., $0.80 per mile for over 1000 miles)
    const ratePerMile = distance > 1000 ? 0.80 : 1.20;
    const basePrice = Math.max(350, Math.floor(distance * ratePerMile));

    // 3. Accumulate per vehicle
    let total = 0;
    const typeModifier = formData.transportType === "enclosed" ? 1.5 : 1; // 50% more for enclosed
    
    formData.vehicles.forEach(v => {
      const conditionModifier = v.condition === "non-running" ? 150 : 0;
      total += Math.floor(basePrice * typeModifier + conditionModifier);
    });
    
    return { price: total, distance: Math.floor(distance) };
  };

  const slideVariants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  };

  const quoteData = calculateQuote();

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden font-sans text-slate-800 flex flex-col relative z-20 border border-slate-100">
      
      {/* Hidden Datalists for Smart Dropdowns */}
      <datalist id="us-cities">
        {US_CITIES.map(city => <option key={city} value={city} />)}
      </datalist>
      
      <datalist id="top-makes">
        {TOP_MAKES.map(make => <option key={make} value={make} />)}
      </datalist>

      {/* Render dynamic datalists for models based on cached makes */}
      {Object.entries(modelsCache).map(([make, models]) => (
        <datalist id={`models-${make}`} key={make}>
          {models.slice(0, 100).map(model => <option key={model} value={model} />)}
        </datalist>
      ))}

      {/* Top Header Section */}
      <div className="bg-[#f8fafc] px-4 py-3.5 md:px-6 md:py-5 border-b border-slate-200 flex justify-between items-center">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-700 font-semibold text-xs sm:text-sm">Instant Quote — 30 Secs</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200">Online Quote Promo: $25 OFF</span>
          </div>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">Get Your Free Car Shipping Quote</h2>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 bg-white border border-blue-200 text-blue-600 font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:bg-blue-50 transition-colors shrink-0">
          Call <Phone className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="px-4 py-4 md:px-6 md:py-6 flex-grow flex flex-col">
        {/* Step Tracker */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 1 ? 'border-blue-600 text-blue-600 bg-blue-50' : step > 1 ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300 text-slate-400'}`}>
              {step > 1 ? <CheckCircle2 className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
            </div>
            <span className={`text-sm font-semibold ${step >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>Destination</span>
          </div>
          
          <div className={`flex-1 h-[2px] mx-2 ${step > 1 ? 'bg-blue-200' : 'bg-slate-100'}`}></div>
          
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 2 ? 'border-blue-600 text-blue-600 bg-blue-50' : step > 2 ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300 text-slate-400'}`}>
              {step > 2 ? <CheckCircle2 className="w-4 h-4" /> : <Car className="w-4 h-4" />}
            </div>
            <span className={`text-sm font-semibold hidden sm:block ${step >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>Vehicle</span>
          </div>
          
          <div className={`flex-1 h-[2px] mx-2 ${step > 2 ? 'bg-blue-200' : 'bg-slate-100'}`}></div>
          
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 3 || step === 4 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-slate-300 text-slate-400'}`}>
              <Calendar className="w-4 h-4" />
            </div>
            <span className={`text-sm font-semibold hidden sm:block ${step >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>Date</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow">
              <label className="text-slate-600 text-sm font-medium mb-2">Pickup & Delivery Location</label>
              
              {/* Stacked Inputs with Swap Button */}
              <div className="relative bg-[#f8fafc] border border-slate-200 rounded-xl mb-6">
                
                {/* Pickup Input */}
                <div className="relative border-b border-slate-200 flex items-center px-4 py-3 pr-14">
                  <MapPin className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <input 
                      ref={inputRefFrom}
                      type="text" 
                      list="us-cities"
                      placeholder="City or ZIP code..."
                      value={formData.zipFrom}
                      onChange={(e) => setFormData({...formData, zipFrom: e.target.value})}
                      className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-semibold text-sm sm:text-base"
                    />
                    {locationFrom && (
                      <div className="text-xs text-emerald-600 font-bold mt-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 shrink-0" /> Verified: {locationFrom.city}, {locationFrom.state}
                      </div>
                    )}
                  </div>
                  {loadingFrom && <Loader2 className="w-4 h-4 text-blue-500 animate-spin ml-2 shrink-0" />}
                  {formData.zipFrom && !loadingFrom && (
                    <button
                      type="button"
                      onClick={clearFrom}
                      aria-label="Clear pickup location"
                      className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ml-1 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Delivery Input */}
                <div className="relative flex items-center px-4 py-3 pr-14">
                  <Flag className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <input 
                      ref={inputRefTo}
                      type="text" 
                      list="us-cities"
                      placeholder="City or ZIP code..."
                      value={formData.zipTo}
                      onChange={(e) => setFormData({...formData, zipTo: e.target.value})}
                      className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-semibold text-sm sm:text-base"
                    />
                    {locationTo && (
                      <div className="text-xs text-emerald-600 font-bold mt-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 shrink-0" /> Verified: {locationTo.city}, {locationTo.state}
                      </div>
                    )}
                  </div>
                  {loadingTo && <Loader2 className="w-4 h-4 text-blue-500 animate-spin ml-2 shrink-0" />}
                  {formData.zipTo && !loadingTo && (
                    <button
                      type="button"
                      onClick={clearTo}
                      aria-label="Clear delivery location"
                      className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ml-1 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Floating Swap Button */}
                <button 
                  type="button"
                  onClick={handleSwap}
                  aria-label="Swap pickup and delivery locations"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-slate-300 shadow-md rounded-xl p-2 hover:bg-blue-50 hover:border-blue-300 transition-all z-10 text-slate-700 hover:text-blue-600 active:scale-95 cursor-pointer"
                >
                  <ArrowDownUp className="w-4 h-4" />
                </button>
              </div>

              {/* Transport Type Segmented Control */}
              <div className="flex justify-between items-center mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div>
                  <label className="text-slate-900 font-bold text-sm block">Transport Type <span className="text-red-500">*</span></label>
                  <p className="text-xs text-slate-500 font-medium">
                    {formData.transportType === 'open' ? 'Open Carrier · Most Affordable' : 'Enclosed Carrier · Premium Protection'}
                  </p>
                </div>
                <div className="w-[170px] shrink-0">
                  <div className="flex bg-slate-200/80 p-1 rounded-lg">
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, transportType: "open"})}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-bold transition-all ${formData.transportType === 'open' ? 'bg-[#2563eb] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'}`}
                    >
                      <Car className="w-3.5 h-3.5" /> Open
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, transportType: "enclosed"})}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-bold transition-all ${formData.transportType === 'enclosed' ? 'bg-[#2563eb] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'}`}
                    >
                      <Car className="w-3.5 h-3.5" /> Closed
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 md:pt-6">
                <button 
                  type="button"
                  onClick={() => {
                    // Fallback defaults if user clicks directly to proceed
                    if (!formData.zipFrom) setFormData(prev => ({ ...prev, zipFrom: "Miami, FL 33101" }));
                    if (!formData.zipTo) setFormData(prev => ({ ...prev, zipTo: "New York, NY 10001" }));
                    handleNext();
                  }}
                  className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] hover:to-[#FF6B00] text-white font-extrabold py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 text-base md:text-lg shadow-[0_8px_20px_-4px_rgba(255,107,0,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(255,107,0,0.55)] active:shadow-inner transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer animate-cta-pulse"
                >
                  Vehicle Details →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow">
              <label className="text-slate-600 text-sm font-medium mb-4">What vehicle(s) are you shipping?</label>
              
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {formData.vehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="relative bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    {formData.vehicles.length > 1 && (
                      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
                        <span className="text-sm font-bold text-slate-800">Vehicle {index + 1}</span>
                        <button onClick={() => removeVehicle(vehicle.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Year *</label>
                        <select 
                          value={vehicle.year} 
                          onChange={(e) => updateVehicle(vehicle.id, 'year', e.target.value)}
                          className="w-full bg-[#f8fafc] border border-slate-200 text-slate-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-400 font-medium text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select Year</option>
                          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                      <div className="relative">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Make *</label>
                        <input 
                          type="text" 
                          list="top-makes"
                          placeholder="e.g. BMW"
                          value={vehicle.make} 
                          onChange={(e) => updateVehicle(vehicle.id, 'make', e.target.value)}
                          className="w-full bg-[#f8fafc] border border-slate-200 text-slate-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-400 font-medium text-sm"
                        />
                        {fetchingModels[vehicle.make] && (
                          <Loader2 className="w-3 h-3 text-blue-500 animate-spin absolute right-3 top-9" />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Model *</label>
                        <input 
                          type="text" 
                          list={modelsCache[vehicle.make] ? `models-${vehicle.make}` : undefined}
                          placeholder={vehicle.make && !modelsCache[vehicle.make] && !fetchingModels[vehicle.make] ? "Loading..." : "e.g. X5"}
                          value={vehicle.model} 
                          onChange={(e) => updateVehicle(vehicle.id, 'model', e.target.value)}
                          className="w-full bg-[#f8fafc] border border-slate-200 text-slate-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-400 font-medium text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Condition</label>
                        <select 
                          value={vehicle.condition} 
                          onChange={(e) => updateVehicle(vehicle.id, 'condition', e.target.value)}
                          className="w-full bg-[#f8fafc] border border-slate-200 text-slate-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-400 font-medium text-sm appearance-none cursor-pointer"
                        >
                          <option value="running">Running</option>
                          <option value="non-running">Non-Running</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={addVehicle}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-blue-600 font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all text-sm"
              >
                <Plus className="w-4 h-4" /> Add Another Vehicle
              </button>

              <div className="mt-auto pt-6 flex gap-3">
                <button 
                  onClick={handleBack} 
                  className="w-1/3 bg-slate-100 text-slate-700 font-bold py-4 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!isVehiclesValid()}
                  className="w-2/3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base md:text-lg shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.5)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0.5 disabled:opacity-40 disabled:bg-slate-300 disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed cursor-pointer"
                >
                  Contact Details →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow">
              <label className="text-slate-600 text-sm font-medium mb-4">Where should we send your instant rate?</label>
              
              <div className="space-y-3">
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input 
                    type="text" placeholder="John Doe"
                    value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Email *</label>
                    <input 
                      type="email" placeholder="john@example.com"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                    />
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Phone *</label>
                    <input 
                      type="tel" placeholder="(555) 000-0000"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 relative">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">Pickup Date *</label>
                  <input 
                    type="date" 
                    value={formData.pickupDate} onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                    className="w-full bg-transparent text-slate-800 focus:outline-none font-medium cursor-pointer"
                  />
                </div>
                
                <div className="flex items-start gap-3 mt-2">
                  <input 
                    type="checkbox" 
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    By checking this box, I confirm that I have read and agree to the Terms & Conditions and Privacy Policy. I also consent to receive calls, SMS, or emails regarding my quote request so I can be provided with accurate pricing, carrier options, and updates about my vehicle shipment.
                  </label>
                </div>
              </div>

              <div className="mt-auto pt-4 md:pt-6 flex gap-3">
                <button 
                  onClick={handleBack} 
                  className="w-1/3 bg-slate-100 text-slate-700 font-bold py-3.5 md:py-4 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors text-sm md:text-base"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!formData.fullName || !formData.email || !formData.phone || !formData.pickupDate || !formData.consent}
                  className="w-2/3 bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] hover:to-[#FF6B00] text-white font-extrabold py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 text-base md:text-lg shadow-[0_8px_20px_-4px_rgba(255,107,0,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(255,107,0,0.55)] active:shadow-[0_4px_10px_-2px_rgba(255,107,0,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0.5 disabled:opacity-40 disabled:bg-slate-300 disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed cursor-pointer"
                >
                  Get My Rate →
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow items-center justify-center text-center py-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-sm">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Your Rate Is Ready!</h2>
              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed max-w-sm">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>! Here is your calculated rate range for <strong className="text-blue-600">{locationFrom?.city || formData.zipFrom} → {locationTo?.city || formData.zipTo}</strong>:
              </p>

              {/* Calculated Rate Box Display */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-4 w-full mb-3 text-center shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-100 mb-1">Estimated Car Shipping Cost</div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight my-1 text-white">
                  {quoteData ? (
                    <>${Math.round((quoteData.price * 0.9) / 10) * 10} – ${Math.round((quoteData.price * 1.15) / 10) * 10}</>
                  ) : (
                    <>$650 – $1,050</>
                  )}
                </div>
                <div className="flex justify-center items-center gap-3 text-xs font-bold text-blue-100 mt-2 pt-2 border-t border-blue-400/40">
                  <span>Transit: {quoteData ? (quoteData.distance < 500 ? "1–3 days" : quoteData.distance < 1500 ? "3–5 days" : "5–7 days") : "3–5 days"} ({quoteData ? quoteData.distance : 850} mi)</span>
                  <span>•</span>
                  <span className="capitalize">{formData.transportType} Transport</span>
                </div>
              </div>
              
              <div className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3.5 w-full mb-4 text-left space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase">Promotion Applied</span>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Online Quote Promo (-$25)</span>
                </div>
                <div className="text-xs text-slate-700 font-medium leading-relaxed">
                  Lead details dispatched! We will reach out to <strong className="text-slate-900">{formData.phone}</strong> and <strong className="text-slate-900">{formData.email}</strong> shortly with your locked rate.
                </div>
              </div>
              
              <a href="tel:5307255383" className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] hover:to-[#FF6B00] text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-base shadow-[0_8px_20px_-4px_rgba(255,107,0,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(255,107,0,0.55)] transition-all mb-2">
                <Phone className="w-4 h-4" /> Call Dispatch: (530) 725-5383
              </a>

              <button onClick={() => {
                setStep(1);
                setFormData({
                  zipFrom: "", zipTo: "", transportType: "open",
                  vehicles: [{ id: Date.now(), year: "", make: "", model: "", condition: "running" }],
                  fullName: "", email: "", phone: "", pickupDate: "", consent: false
                });
                setLocationFrom(null);
                setLocationTo(null);
              }} className="text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors">
                Calculate Another Route
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean Security Note */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-semibold mt-4 pt-3 border-t border-slate-100 text-center">
          <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>Guaranteed Rates · Zero Upfront Deposit · 100% Free Quote</span>
        </div>
      </div>
    </div>
  );
}
