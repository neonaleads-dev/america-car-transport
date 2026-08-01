import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

import SmoothScroll from "@/components/layout/SmoothScroll";
import StructuredData from "@/components/seo/StructuredData";
import GSAPScrollAnimations from "@/components/animation/GSAPScrollAnimations";

export const metadata: Metadata = {
  title: "America's Trusted Network for Vehicle Shipping",
  description:
    "Compare verified car carriers, get instant quotes, and ship your vehicle safely anywhere in America.",
  alternates: {
    canonical: "https://americacartransport.com",
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
