"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Calendar, Truck } from "lucide-react";

const quoteSchema = z.object({
  originZip: z.string().min(5, "Valid ZIP code required").max(5),
  destinationZip: z.string().min(5, "Valid ZIP code required").max(5),
  vehicleYear: z.string().min(4, "Year required"),
  vehicleMake: z.string().min(1, "Make required"),
  vehicleModel: z.string().min(1, "Model required"),
  transportType: z.enum(["open", "enclosed"]),
  shipDate: z.string().min(1, "Date required"),
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quoteResult, setQuoteResult] = useState<{ price: string, route: string } | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      transportType: "open",
    },
    mode: "onTouched",
  });

  const nextStep = async (fieldsToValidate: (keyof QuoteFormValues)[]) => {
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API call and pricing engine
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Fake logic for a realistic auto transport quote
    const basePrice = data.transportType === "enclosed" ? 1200 : 700;
    const distanceFactor = Math.floor(Math.random() * 500);
    const finalPrice = basePrice + distanceFactor;
    
    setQuoteResult({
      price: `$${finalPrice.toLocaleString()}`,
      route: `${data.originZip} ➔ ${data.destinationZip}`
    });
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const renderStepIndicators = () => (
    <div className="flex items-center justify-between mb-8 relative">
      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-paper/20 -z-10" />
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
            step >= i ? "bg-red text-paper" : "bg-paper text-navy border border-navy/20"
          }`}
        >
          {i}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white rounded-md shadow-2xl shadow-navy/20 overflow-hidden flex flex-col">
      {/* Form Header */}
      <div className="bg-red text-paper p-6 md:p-8">
        <h2 className="text-3xl font-heading font-bold mb-2">
          Get a quick quote
        </h2>
        <p className="text-paper/90 text-sm md:text-base">
          Or call us now at +1 (530) 725-5383
        </p>
      </div>

      {/* Form Body */}
      <div className="p-6 md:p-8 flex-grow">

          {isSuccess && quoteResult ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">Your Estimated Quote</div>
              <h3 className="text-5xl font-black text-slate-900 mb-2">{quoteResult.price}</h3>
              <p className="text-slate-500 font-medium mb-8 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Route: {quoteResult.route}
              </p>
              
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-8">
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  A detailed breakdown has been sent to your email. Our dispatch team will contact you shortly to finalize your booking date.
                </p>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setQuoteResult(null);
                  setStep(1);
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
              >
                Start New Quote
              </button>
            </div>
          ) : (
            <>
              {renderStepIndicators()}

              <form onSubmit={handleSubmit(onSubmit)} className="min-h-[250px] relative">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <MapPin className="text-red w-5 h-5" /> Where is the vehicle going?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">
                            Origin ZIP Code
                          </label>
                          <input
                            {...register("originZip")}
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-shadow"
                            placeholder="e.g. 10001"
                          />
                          {errors.originZip && <p className="text-red text-sm mt-1">{errors.originZip.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">
                            Destination ZIP Code
                          </label>
                          <input
                            {...register("destinationZip")}
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-shadow"
                            placeholder="e.g. 90001"
                          />
                          {errors.destinationZip && <p className="text-red text-sm mt-1">{errors.destinationZip.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={() => nextStep(["originZip", "destinationZip"])}
                          className="bg-navy text-paper px-6 py-3 rounded-md font-semibold hover:bg-navy/90 flex items-center gap-2"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Truck className="text-red w-5 h-5" /> Vehicle Details
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Year</label>
                          <input {...register("vehicleYear")} className="w-full border border-gray-300 rounded-md p-3" placeholder="e.g. 2023" />
                          {errors.vehicleYear && <p className="text-red text-sm mt-1">{errors.vehicleYear.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Make</label>
                          <input {...register("vehicleMake")} className="w-full border border-gray-300 rounded-md p-3" placeholder="e.g. Toyota" />
                          {errors.vehicleMake && <p className="text-red text-sm mt-1">{errors.vehicleMake.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Model</label>
                          <input {...register("vehicleModel")} className="w-full border border-gray-300 rounded-md p-3" placeholder="e.g. Camry" />
                          {errors.vehicleModel && <p className="text-red text-sm mt-1">{errors.vehicleModel.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <button type="button" onClick={() => setStep(1)} className="text-navy font-semibold px-4 py-2 hover:bg-gray-50 rounded-md">
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => nextStep(["vehicleYear", "vehicleMake", "vehicleModel"])}
                          className="bg-navy text-paper px-6 py-3 rounded-md font-semibold hover:bg-navy/90 flex items-center gap-2"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Calendar className="text-red w-5 h-5" /> Shipping Preferences
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Transport Type</label>
                          <div className="flex gap-4">
                            <label className="flex-1 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-navy transition-colors flex items-center gap-2">
                              <input type="radio" value="open" {...register("transportType")} className="text-navy focus:ring-navy" />
                              <span className="font-medium">Open Carrier</span>
                            </label>
                            <label className="flex-1 border border-gray-200 rounded-md p-4 cursor-pointer hover:border-navy transition-colors flex items-center gap-2">
                              <input type="radio" value="enclosed" {...register("transportType")} className="text-navy focus:ring-navy" />
                              <span className="font-medium">Enclosed Carrier</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Preferred Ship Date</label>
                          <input type="date" {...register("shipDate")} className="w-full border border-gray-300 rounded-md p-3" />
                          {errors.shipDate && <p className="text-red text-sm mt-1">{errors.shipDate.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <button type="button" onClick={() => setStep(2)} className="text-navy font-semibold px-4 py-2 hover:bg-gray-50 rounded-md">
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => nextStep(["transportType", "shipDate"])}
                          className="bg-navy text-paper px-6 py-3 rounded-md font-semibold hover:bg-navy/90 flex items-center gap-2"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold">Where should we send your quote?</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
                          <input {...register("name")} className="w-full border border-gray-300 rounded-md p-3" />
                          {errors.name && <p className="text-red text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                          <input type="email" {...register("email")} className="w-full border border-gray-300 rounded-md p-3" />
                          {errors.email && <p className="text-red text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                          <input type="tel" {...register("phone")} className="w-full border border-gray-300 rounded-md p-3" />
                          {errors.phone && <p className="text-red text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <button type="button" onClick={() => setStep(3)} className="text-navy font-semibold px-4 py-2 hover:bg-gray-50 rounded-md">
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-red text-paper px-8 py-3 rounded-md font-bold hover:bg-red/90 flex items-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? "Processing..." : "Get My Quote"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </>
          )}
      </div>
    </div>
  );
}
