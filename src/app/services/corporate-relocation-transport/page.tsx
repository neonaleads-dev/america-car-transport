import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Briefcase, ShieldCheck, Clock, MapPin, Phone, CheckCircle2, HelpCircle, FileText, UserCheck, CreditCard, Home } from "lucide-react";

export const metadata = {
  title: "Corporate Relocation Car Shipping | Employee Vehicle Transport",
  description: "America Car Transport partners with companies and relocation coordinators to ship employee vehicles — direct invoicing, consistent service, and a single point of contact.",
  alternates: {
    canonical: "https://americacartransport.com/services/corporate-relocation-transport",
  },
};

export default function CorporateRelocationTransportPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/services/corporate-relocation-transport#service",
        "name": "Corporate Relocation Car Shipping",
        "serviceType": "Corporate Employee Relocation Vehicle Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Companies and relocation coordinators managing employee moves"
        },
        "offers": {
          "@type": "Offer",
          "description": "Corporate employee relocation vehicle transport with direct invoicing and dedicated account management"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/services/corporate-relocation-transport#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can vehicle shipping be invoiced directly to our company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Direct corporate invoicing is available for approved corporate accounts rather than requiring individual employees to pay upfront."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle multiple employees relocating at the same time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Whether it's a single executive transfer or a multi-employee relocation wave, each shipment is coordinated individually under your company account."
            }
          },
          {
            "@type": "Question",
            "name": "What protection level is typically used for corporate moves?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most corporate relocations use door-to-door open transport for maximum employee convenience. Enclosed transport is also available for luxury or classic employee vehicles."
            }
          },
          {
            "@type": "Question",
            "name": "Who should reach out to set this up — HR or the employee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Either works. HR departments and relocation coordinators often set up the master account, while transferring employees can also book directly referencing the corporate billing code."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/services/corporate-relocation-transport#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Corporate Relocation Transport", "item": "https://americacartransport.com/services/corporate-relocation-transport" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Header Navigation */}
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
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
            <Link href="/licensing-insurance" className="hover:text-blue-600 transition-colors">Licensing &amp; Insurance</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
            <Link href="/contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Set Up Corporate Account
            </Link>
          </div>
        </div>
      </header>

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Corporate Relocation Transport</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-12 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200 shadow-sm">
              <Briefcase className="w-4 h-4 text-blue-700" />
              HR &amp; Corporate Employee Relocation Program Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto">
              Corporate Relocation Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              When an employee relocates for a new role, their vehicle is a crucial part of a smooth transition. America Car Transport partners with HR departments and relocation coordinators to provide direct company invoicing, dedicated account management, and reliable nationwide vehicle delivery.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-200" /> Set Up Corporate Account
              </Link>
              <a href="tel:5307255383" className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-sm transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600" /> Relocation Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Direct Company Invoicing</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Streamline corporate accounting with direct corporate billing instead of requiring relocating employees to submit out-of-pocket expense reimbursements.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Single Point of Account Contact</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Your HR team gets a dedicated account representative who manages dispatch, tracking, and scheduling across all transferring employees and multi-city waves.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold">
                <Home className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Door-to-Door Convenience</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Our standard corporate service defaults to <Link href="/services/door-to-door-transport" className="text-blue-700 font-bold underline">Door-to-Door Transport</Link>, picking up and delivering directly at each employee&apos;s residence.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Fully Insured &amp; Verified Network</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Every carrier dispatched for employee vehicles is fully vetted for FMCSA licensing and primary cargo insurance coverage. See our <Link href="/licensing-insurance" className="text-blue-700 font-bold underline">Licensing &amp; Insurance</Link> details.
              </p>
            </div>
          </div>

          {/* Verification & Reviews Banner */}
          <article className="bg-blue-900 text-white p-8 rounded-3xl space-y-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Proven Satisfaction Across Employee Moves</h2>
              <p className="text-xs md:text-sm text-blue-200 font-medium">
                Read authentic customer feedback and 4.9-star ratings on our <Link href="/reviews" className="text-white font-bold underline">Verified Customer Reviews</Link> page.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 bg-white text-blue-900 px-6 py-3 rounded-xl font-extrabold text-sm hover:bg-slate-100 transition-colors">
              Request Relocation Account
            </Link>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Corporate Relocation FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can vehicle shipping be invoiced directly to our company?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — direct corporate invoicing is available for approved corporate accounts rather than requiring individual employees to pay upfront.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Do you handle multiple employees relocating at the same time?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — whether it&apos;s a single executive transfer or a multi-employee relocation wave, each shipment is coordinated individually under your company account.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Who should reach out to set this up — HR or the employee?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Either works. HR departments and relocation coordinators often set up the master account, while transferring employees can also book directly referencing the corporate billing code.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
