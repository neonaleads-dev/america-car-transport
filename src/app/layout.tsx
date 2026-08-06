import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

import SmoothScroll from "@/components/layout/SmoothScroll";
import StructuredData from "@/components/seo/StructuredData";
import GSAPScrollAnimations from "@/components/animation/GSAPScrollAnimations";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.americacartransport.com"),
  title: "America's Trusted Network for Vehicle Shipping",
  description:
    "Compare verified car carriers, get instant quotes, and ship your vehicle safely anywhere in America.",
  verification: {
    google: "ddgFC7lCCFGcRISIspal82FrdtgAL6wFuWAVL5V6Kg8",
  },
  alternates: {
    canonical: "https://www.americacartransport.com",
    languages: {
      "en-US": "https://www.americacartransport.com",
      "es-US": "https://www.americacartransport.com/es",
    },
  },
  openGraph: {
    url: "https://www.americacartransport.com",
    siteName: "America Car Transport",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="google-site-verification" content="ddgFC7lCCFGcRISIspal82FrdtgAL6wFuWAVL5V6Kg8" />
        <StructuredData />
      </head>
      <body className="font-sans bg-slate-100 text-charcoal antialiased">
        <GSAPScrollAnimations />
        <SmoothScroll>
          <div className="max-w-[1600px] mx-auto bg-white shadow-2xl relative overflow-x-clip min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
