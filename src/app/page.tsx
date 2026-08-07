import HomeClient from "./page.client";

export const metadata = {
  title: "America's Trusted Network for Vehicle Shipping",
  description: "Compare verified car carriers, get instant quotes, and ship your vehicle safely anywhere in America.",
  alternates: {
    canonical: "https://www.americacartransport.com",
    languages: {
      "en-US": "https://www.americacartransport.com",
      "es-US": "https://www.americacartransport.com/es",
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
