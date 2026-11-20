import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { EsGuide } from "@/data/es-guides";

// Shared content block for the Spanish landing pages: direct answer, price table,
// detail sections, visible FAQ with matching FAQPage schema, and related links.
export default function SpanishGuideContent({ guide }: { guide: EsGuide }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${guide.url}#faq`,
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-14">
        <div className="bg-blue-50/90 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
          <div className="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">Respuesta Directa</div>
          <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">{guide.respuesta}</p>
        </div>

        {guide.precios.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{guide.preciosTitulo}</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Ruta</th>
                    <th className="py-4 px-6">Millas</th>
                    <th className="py-4 px-6">Transporte Abierto</th>
                    <th className="py-4 px-6">Tiempo de Tránsito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  {guide.precios.map((r) => (
                    <tr key={r.ruta}>
                      <td className="py-3.5 px-6 font-bold">{r.ruta}</td>
                      <td className="py-3.5 px-6">{r.millas}</td>
                      <td className="py-3.5 px-6 text-blue-700 font-bold">{r.precio}</td>
                      <td className="py-3.5 px-6">{r.dias}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-3">
              Precios de referencia para un sedán en transporte abierto. El precio final depende de la fecha, la temporada y la disponibilidad de camiones.
            </p>
          </div>
        )}

        {guide.secciones.map((s) => (
          <div key={s.titulo}>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{s.titulo}</h2>
            {s.parrafos.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-slate-700 font-medium leading-relaxed mb-4">{p}</p>
            ))}
            {s.lista && (
              <ul className="space-y-3 text-sm md:text-base text-slate-700 font-medium">
                {s.lista.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {guide.faqs.map((f) => (
              <details key={f.q} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                <summary className="font-extrabold text-slate-900 cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-sm md:text-base text-slate-700 font-medium leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">Guías Relacionadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {guide.enlaces.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all font-bold text-slate-900 text-sm flex items-center justify-between group"
              >
                <span>{l.label}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
