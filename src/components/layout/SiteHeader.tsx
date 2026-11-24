import Link from "next/link";
import { Phone, Menu } from "lucide-react";

type Lang = "en" | "es";

const NAV: Record<Lang, { key: string; href: string; label: string }[]> = {
  en: [
    { key: "services", href: "/services", label: "Services" },
    { key: "routes", href: "/routes", label: "Routes" },
    { key: "locations", href: "/locations", label: "Locations" },
    { key: "how", href: "/#how-it-works", label: "How It Works" },
    { key: "licensing", href: "/licensing-insurance", label: "Licensing" },
    { key: "faq", href: "/faq", label: "FAQ" },
  ],
  es: [
    { key: "home", href: "/es", label: "Inicio" },
    { key: "services", href: "/es/servicios", label: "Servicios" },
    { key: "calc", href: "/es/calculadora", label: "Calculadora de Costos" },
    { key: "locations", href: "/locations", label: "Ubicaciones" },
    { key: "reviews", href: "/reviews", label: "Opiniones" },
  ],
};

const PHONE_DISPLAY = "(530) 725-5383";
const PHONE_HREF = "tel:5307255383";

/**
 * One header for every page (EN + ES). Server component, no client JS:
 * the mobile menu is a native <details> element.
 */
export default function SiteHeader({
  lang = "en",
  active,
  ctaHref,
  ctaLabel,
}: {
  lang?: Lang;
  active?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const items = NAV[lang];
  const home = lang === "es" ? "/es" : "/";
  const cta = {
    href: ctaHref ?? (lang === "es" ? "/es/calculadora" : "/tools/car-shipping-cost-calculator"),
    label: ctaLabel ?? (lang === "es" ? "Cotización Gratis" : "Get a Quote"),
  };
  const otherLang = lang === "es"
    ? { href: "/", label: "EN", title: "English" }
    : { href: "/es", label: "ES", title: "Español" };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-navy-900/10">
      {/* Utility strip: phone + language, the things people look for first */}
      <div className="hidden md:block bg-navy-900 text-navy-100 text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <span>
            {lang === "es"
              ? "Corredor de transporte de autos con licencia y fianza · Servicio en los 50 estados"
              : "Licensed & bonded auto transport broker · Serving all 50 states"}
          </span>
          <div className="flex items-center gap-5">
            <Link href={otherLang.href} title={otherLang.title} hrefLang={lang === "es" ? "en" : "es"} className="font-semibold tracking-wide hover:text-white">
              {otherLang.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-3 md:gap-6">
        <Link href={home} title={lang === "es" ? "America Car Transport Página Principal" : "America Car Transport Homepage"} className="flex items-center shrink-0">
          <img
            src="/america-car-transport-logo.png"
            alt={lang === "es" ? "America Car Transport Logotipo Oficial" : "America Car Transport - Nationwide Auto Transport Company Logo"}
            width={160}
            height={72}
            fetchPriority="high"
            className="h-9 sm:h-11 md:h-[52px] w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] font-medium text-slate-700">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
              className={
                active === item.key
                  ? "text-navy-900 font-semibold underline decoration-signal decoration-2 underline-offset-[10px]"
                  : "hover:text-navy-900 transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Phone in its own box right next to the quote button, on every screen size */}
          <a
            href={PHONE_HREF}
            aria-label={`${lang === "es" ? "Llamar al" : "Call"} ${PHONE_DISPLAY}`}
            data-magnetic
            className="inline-flex items-center gap-1.5 sm:gap-2 h-10 md:h-11 px-2.5 sm:px-3.5 rounded-md border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-[13px] sm:text-sm font-bold whitespace-nowrap transition-colors tabular"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href={cta.href}
            data-magnetic
            className="inline-flex items-center h-10 md:h-11 px-3 sm:px-4 md:px-5 rounded-md bg-signal hover:bg-signal-700 text-white text-[13px] sm:text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <span className="sm:hidden">{lang === "es" ? "Cotizar" : "Quote"}</span>
            <span className="hidden sm:inline">{cta.label}</span>
          </Link>

          <details className="lg:hidden relative group">
            <summary
              aria-label={lang === "es" ? "Menú" : "Menu"}
              className="list-none [&::-webkit-details-marker]:hidden cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-navy-900"
            >
              <Menu className="w-5 h-5" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-12 w-64 bg-white border border-slate-200 rounded-md shadow-lg py-2 text-[15px]"
            >
              {items.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-4 py-2.5 hover:bg-navy-50 ${active === item.key ? "text-navy-900 font-semibold" : "text-slate-700"}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-slate-200 mt-2 pt-2 px-4 pb-1 flex items-center justify-between text-sm">
                <a href={PHONE_HREF} className="font-semibold text-navy-900">{PHONE_DISPLAY}</a>
                <Link href={otherLang.href} className="font-semibold text-slate-600">{otherLang.title}</Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
