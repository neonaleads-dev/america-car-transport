import HomeClient from "./page.client";

export const metadata = {
  title: "Car Shipping & Auto Transport Nationwide | America Car Transport",
  description: "Get a free car shipping quote from America Car Transport. Compare open, enclosed, door-to-door, and expedited auto transport across the U.S. No upfront deposit.",
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
