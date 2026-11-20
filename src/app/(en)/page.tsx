import HomeClient from "./page.client";

export const metadata = {
  title: "America Car Transport | Nationwide Car Shipping & Auto Transport",
  description: "America Car Transport ships cars nationwide between all 50 states. Free car shipping quotes, open and enclosed auto transport, door-to-door, no upfront deposit.",
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
