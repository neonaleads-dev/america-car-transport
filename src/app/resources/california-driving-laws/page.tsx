import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { ShieldCheck, BookOpen, AlertCircle, ExternalLink, HelpCircle, ChevronDown, CheckCircle2, Car, Phone, Award } from "lucide-react";

export const metadata = {
  title: "California Driving Laws 2026 | Rules Every Driver Should Know",
  description: "Answers to the most-asked California driving law questions for 2026 — phone use, speed limits, teen curfews, tailgating, and more. Fact-checked guide.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources/california-driving-laws",
  },
  openGraph: {
    title: "California Driving Laws 2026 | Rules Every Driver Should Know",
    description: "Answers to the most-asked California driving law questions for 2026 — phone use, speed limits, teen curfews, tailgating, and more. Fact-checked guide.",
    url: "https://www.americacartransport.com/resources/california-driving-laws",
    siteName: "America Car Transport",
    type: "article",
  },
};

const LAWS_FAQS = [
  {
    q: "Is tailgating illegal in California?",
    a: "Yes, under Vehicle Code § 21703, which requires a reasonable and prudent following distance given speed and road conditions."
  },
  {
    q: "What is the 3 second rule in California?",
    a: "It is a defensive-driving guideline for following distance, not an official numbered statute. California law requires a 'reasonable and prudent' distance without specifying an exact time."
  },
  {
    q: "What is the 7500 mile rule in California?",
    a: "This does not correspond to any documented California Vehicle Code provision. It may be confused with high-beam headlight distance rules (CVC § 24409), which use feet, not miles."
  },
  {
    q: "What is the no touch rule in California?",
    a: "It prohibits holding or physically operating a phone for any reason while driving (CVC § 23123.5), including navigation, unless the device is mounted and fully hands-free."
  },
  {
    q: "Can you drink coffee while driving in California?",
    a: "Yes, there is no specific law against eating or drinking behind the wheel, though it can factor into a careless driving citation if it causes unsafe vehicle control."
  },
  {
    q: "Can you refuse to exit your vehicle in California?",
    a: "Generally no — established legal precedent allows police officers to lawfully order occupants out of a vehicle during a valid traffic stop."
  },
  {
    q: "Is driving with two feet illegal in California?",
    a: "Not on its own, but it can contribute to a careless or reckless driving citation if it results in erratic driving or unsafe vehicle control."
  },
  {
    q: "Can you go 10 miles over the speed limit in California?",
    a: "No — California's Basic Speed Law (CVC § 22350) has no built-in buffer; any speed over the posted limit is technically citable."
  },
  {
    q: "Can a 17-year-old drive after 11pm in California?",
    a: "Generally no, if they are within their first 12 months of holding a provisional license, regardless of whether they have turned 17, unless a documented exception applies."
  },
  {
    q: "Can you drive someone else's car in California?",
    a: "Generally yes with permission, as most auto insurance policies extend coverage to permissive users under a permissive use principle. Confirm with the owner's insurer."
  }
];

export default function CaliforniaDrivingLawsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/resources/california-driving-laws#article",
        "headline": "California Driving Laws 2026: Answers to the Most-Asked Questions",
        "description": "Fact-checked guide answering the top 10 most-searched questions about California driving laws, CVC statutes, speed buffers, and phone restrictions.",
        "author": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "datePublished": "2026-07-29",
        "dateModified": "2026-07-29",
        "mainEntityOfPage": "https://www.americacartransport.com/resources/california-driving-laws"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/resources/california-driving-laws#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.americacartransport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": "https://www.americacartransport.com/resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "California Driving Laws",
            "item": "https://www.americacartransport.com/resources/california-driving-laws"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/resources/california-driving-laws#faq",
        "mainEntity": LAWS_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport - Nationwide Auto Transport Company Logo" 
              title="America Car Transport Official Logo"
              width={160}
              height={72}
              // @ts-ignore
              fetchpriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/licensing-insurance" className="hover:text-blue-600 transition-colors">Licensing &amp; Insurance</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Resources</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">California Driving Laws</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Legal Reference &amp; Driver Safety Guide (2026)
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            California Driving Laws 2026: Answers to the Most-Asked Questions
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">
            Fact-checked answers to real questions California drivers are searching for right now — covering cell phone use, speed limits, teen curfews, tailgating, and vehicle code regulations.
          </p>

          {/* Legal Disclaimer Box */}
          <div className="bg-amber-50/90 border border-amber-200 p-4 rounded-2xl flex items-start gap-3 max-w-3xl text-xs md:text-sm text-amber-900 font-medium">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Legal Disclaimer:</strong> This guide provides general information regarding California Vehicle Code (CVC) statutes for educational purposes and does not constitute formal legal advice. For official statutory text and licensing requirements, visit the <a href="https://www.dmv.ca.gov" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-950">California DMV</a> and <a href="https://www.chp.ca.gov" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-950">California Highway Patrol (CHP)</a> official sites.
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-16">
          
          {/* Question 1: Tailgating */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Is Tailgating Illegal in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Yes. California Vehicle Code § 21703 prohibits following another vehicle more closely than is reasonable and prudent given the speed, traffic, and road conditions. This is a citable offense on its own, even without a collision.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              Yes, tailgating is illegal in California under Vehicle Code § 21703, which requires drivers to maintain a reasonable and prudent following distance based on current speed and conditions.
            </div>
          </article>

          {/* Question 2: 3-Second Rule */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Is the &ldquo;3 Second Rule&rdquo; in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              The &ldquo;3-second rule&rdquo; isn&apos;t an officially numbered law — it&apos;s a widely-taught defensive driving guideline for judging safe following distance: pick a fixed point on the road, and count at least 3 seconds between when the car ahead of you passes it and when you do. California&apos;s actual following-distance law (CVC § 21703) doesn&apos;t specify a number of seconds; it just requires a &ldquo;reasonable and prudent&rdquo; distance. The 3-second rule is a practical way drivers estimate what &ldquo;reasonable&rdquo; looks like, especially useful at higher speeds where a fixed following distance in car-lengths becomes less meaningful.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              The 3-second rule is a defensive-driving guideline, not an official California statute. California law (CVC § 21703) requires a &ldquo;reasonable and prudent&rdquo; following distance without specifying an exact time or distance — the 3-second count is a commonly taught method for judging what that looks like in practice.
            </div>
          </article>

          {/* Question 3: 7500 Mile Rule */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Is the &ldquo;7500 Mile Rule&rdquo; in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              This does not appear to correspond to any documented section of the California Vehicle Code. It&apos;s possible this phrase is a mix-up with California&apos;s high-beam headlight rules (which specify distances in feet, not miles — high beams must dim within 500 feet of an oncoming vehicle and 300 feet when following another vehicle under CVC § 24409), or with an unrelated non-driving context (such as a vehicle warranty or lease mileage term). If you encountered this phrase somewhere specific, it&apos;s worth double-checking the source — we couldn&apos;t verify it as an actual California driving law.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-amber-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚠️ Direct Answer &amp; Fact Check
              </span>
              There is no verified &ldquo;7500 mile rule&rdquo; in California driving law. This term does not correspond to any documented section of the California Vehicle Code. It may be a misremembering of California&apos;s high-beam headlight distance rules (500 feet for oncoming traffic, 300 feet when following), which are unrelated to a mileage figure.
            </div>
          </article>

          {/* Question 4: No Touch Rule */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Is the &ldquo;No Touch&rdquo; Rule in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              California&apos;s &ldquo;no-touch&rdquo; phone law (Vehicle Code § 23123.5) prohibits holding or physically operating a phone for any reason while driving — including navigation, texting, or even briefly checking a notification — unless the phone is mounted and used completely hands-free. A 2025 California Court of Appeal ruling confirmed this applies even to briefly holding a phone to check a map, closing a loophole some drivers previously relied on.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              California&apos;s &ldquo;no-touch&rdquo; rule prohibits holding or physically operating a phone for any reason while driving, even briefly checking navigation, unless the device is mounted and operated completely hands-free. This was reinforced by a 2025 court ruling that closed the &ldquo;just checking the map&rdquo; loophole.
            </div>
          </article>

          {/* Question 5: Drinking Coffee */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can You Drink Coffee While Driving in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              There&apos;s no California law that specifically bans eating or drinking while driving. However, if doing so causes you to drive unsafely — swerving, delayed reaction time, failing to maintain your lane — you can be cited under general careless or reckless driving statutes. It&apos;s legal in the narrow sense, but not risk-free from a citation standpoint if it visibly affects your driving.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              Yes, drinking coffee while driving is legal in California — there&apos;s no specific law against eating or drinking behind the wheel. However, if it causes unsafe driving, you can still be cited under general careless or reckless driving laws.
            </div>
          </article>

          {/* Question 6: Refuse to Exit */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can You Refuse to Exit Your Vehicle in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Generally, no. Under established legal precedent, a police officer conducting a lawful traffic stop can order the driver (and, in many circumstances, passengers) to exit the vehicle, even without additional suspicion beyond the original reason for the stop. Refusing a lawful order to exit can itself lead to additional legal consequences.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              You generally cannot legally refuse to exit your vehicle during a lawful traffic stop. Established legal precedent allows officers to order occupants out of a vehicle during a valid stop, and refusing that order can result in additional legal consequences.
            </div>
          </article>

          {/* Question 7: Two-Foot Driving */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Is Driving With Two Feet Illegal in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Not on its own — California doesn&apos;t have a specific law banning two-footed driving (using one foot for the brake, one for the gas, common with drivers who learned on a manual transmission). However, if it results in unsafe vehicle control — unintended acceleration, braking issues, erratic speed — it could factor into a careless or reckless driving citation.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              Driving with two feet isn&apos;t independently illegal in California, but it can contribute to a careless or reckless driving citation if it results in unsafe vehicle control.
            </div>
          </article>

          {/* Question 8: 10 MPH Buffer */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can You Go 10 Miles Over the Speed Limit in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              No — this is a common misconception. California&apos;s Basic Speed Law (CVC § 22350) has no built-in buffer or grace amount. Technically, exceeding the posted limit by any amount is citable, though in practice, enforcement discretion varies. There&apos;s no legal right to drive 10 mph over the limit.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              No, there is no legal 10 mph buffer over the speed limit in California. The state&apos;s Basic Speed Law (CVC § 22350) doesn&apos;t include a grace amount — any speed over the posted limit is technically a citable violation, regardless of common assumptions about enforcement tolerance.
            </div>
          </article>

          {/* Question 9: 17-Year-Old Curfew */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can a 17-Year-Old Drive After 11pm in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Generally, no. California&apos;s provisional license curfew prohibits driving between 11 p.m. and 5 a.m. during the first 12 months of holding a provisional license — regardless of whether the driver has since turned 17, as long as they&apos;re still within that 12-month window. Exceptions exist for medical necessity, work, school activities, and similar documented reasons.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              A 17-year-old with a provisional license generally cannot drive between 11 p.m. and 5 a.m. during their first 12 months of licensure, regardless of their current age, unless a documented exception (medical necessity, work, school activity) applies.
            </div>
          </article>

          {/* Question 10: Driving Someone Else's Car */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can You Drive Someone Else&apos;s Car in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Generally, yes, with the owner&apos;s permission — most California auto insurance policies extend coverage to permissive users under a &ldquo;permissive use&rdquo; principle, meaning the vehicle&apos;s insurance (not the driver&apos;s) typically applies first in an accident. That said, this varies by specific policy, so it&apos;s worth confirming directly with the vehicle owner&apos;s insurer before relying on this in any high-stakes situation.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              Yes, you can generally drive someone else&apos;s car in California with their permission, and most insurance policies extend coverage to permissive users. Coverage details vary by policy, so confirming with the vehicle owner&apos;s insurer is recommended before driving.
            </div>
          </article>

          {/* Question 11: New 2026 Driving Laws */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Are the New 2026 Driving Laws in California?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              The most significant recent change is the expanded enforcement of California&apos;s &ldquo;no-touch&rdquo; phone law, following a 2025 Court of Appeal ruling that closed a loophole allowing brief phone handling for navigation. As of 2026, holding a phone for virtually any reason while driving — even briefly — is treated as a clear violation, with expanded enforcement reported statewide.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer
              </span>
              The most notable 2026 California driving law development is the expanded enforcement of the &ldquo;no-touch&rdquo; phone law, following a 2025 court ruling that eliminated the previous gray area around briefly holding a phone for navigation.
            </div>
          </article>

          {/* Natural Bridge Section to Core Business */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
                <Car className="w-4 h-4 text-blue-400" />
                Relocating to California?
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                Moving to California? Know the Rules Before You Drive
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-6">
                If you are relocating to California and shipping your vehicle rather than driving it yourself, it is worth reviewing these rules before your car arrives — particularly the no-touch phone law and provisional license curfew if you have a teen driver in the household.
              </p>
              
              <Link 
                href="/locations/california"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                Explore California Car Shipping Rates &amp; Routes →
              </Link>
            </div>
          </div>

          {/* Consolidating FAQ Accordion */}
          <div className="pt-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Consolidated FAQ Summary
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions Summary
              </h2>
            </div>

            <div className="space-y-3">
              {LAWS_FAQS.map((faq, idx) => (
                <details key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-extrabold text-slate-900 text-sm md:text-base cursor-pointer">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                  </summary>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-200/80">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
