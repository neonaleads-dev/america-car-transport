import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

import StructuredData from "@/components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import LeadSourceTracker from "@/components/analytics/LeadSourceTracker";
import dynamic from "next/dynamic";
const GSAPScrollAnimations = dynamic(() => import("@/components/animation/GSAPScrollAnimations"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.americacartransport.com"),
  title: "Transporte de Autos en EE.UU. | America Car Transport",
  description:
    "Cotice y envíe su vehículo a cualquier lugar de Estados Unidos con la red de transportistas verificados de America Car Transport.",
  verification: {
    google: "ddgFC7lCCFGcRISIspal82FrdtgAL6wFuWAVL5V6Kg8",
  },
  openGraph: {
    url: "https://www.americacartransport.com/es",
    siteName: "America Car Transport",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <meta name="google-site-verification" content="ddgFC7lCCFGcRISIspal82FrdtgAL6wFuWAVL5V6Kg8" />
        <link rel="preconnect" href="https://www.americacartransport.com" />
        <link 
          rel="preload" 
          as="image" 
          href="/hero-background-truck-bright.webp" 
          type="image/webp"
          fetchPriority="high" 
        />
        <StructuredData />
      </head>
      <body className="font-sans bg-paper text-charcoal antialiased">
        <GSAPScrollAnimations />
          <div className="relative overflow-x-clip min-h-screen flex flex-col bg-paper">
            {children}
          </div>
        <LeadSourceTracker />
        <Analytics />
      </body>
    </html>
  );
}
