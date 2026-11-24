import type { Config } from "tailwindcss";

/*
 * ACT brand theme.
 *
 * The site was built with stock Tailwind blue / emerald / amber / purple /
 * cyan classes on 60+ pages. Instead of rewriting every class, the stock
 * scales are remapped here to the brand palette taken from the logo:
 *   navy  (#0B2545)  -> replaces blue, indigo, sky, purple, violet, cyan, teal
 *   forest            -> replaces emerald / green (success, "verified")
 *   brass (#C9A227)   -> replaces amber / yellow (ratings, highlights)
 *   signal red        -> the one call-to-action colour
 * Lightness steps match Tailwind's, so text/background pairs keep WCAG AA.
 */
const navy = {
  50: "#F2F5F9",
  100: "#E4EAF2",
  200: "#C8D3E2",
  300: "#9DB0C9",
  400: "#6B86A8",
  500: "#476489",
  600: "#2E4C73",
  700: "#1E3A60",
  800: "#142D50",
  900: "#0B2545",
  950: "#061830",
  DEFAULT: "#0B2545",
};

const forest = {
  50: "#F1F6F2",
  100: "#DDEBE1",
  200: "#BCD6C5",
  300: "#8FB99E",
  400: "#5E9673",
  500: "#3F7A56",
  600: "#2F6544",
  700: "#255137",
  800: "#1E412D",
  900: "#183526",
  950: "#0C1E15",
};

const brass = {
  50: "#FBF7EA",
  100: "#F5ECCB",
  200: "#ECD995",
  300: "#E0C25E",
  400: "#C9A227",
  500: "#B08B1A",
  600: "#8C6E14",
  700: "#6E5612",
  800: "#584513",
  900: "#493A14",
  950: "#2A2008",
  DEFAULT: "#C9A227",
};

const signal = {
  50: "#FDF2F3",
  100: "#FBE3E6",
  200: "#F6C7CD",
  300: "#EE9BA6",
  400: "#E05F72",
  500: "#D62839",
  600: "#C8102E",
  700: "#A50D26",
  800: "#860B20",
  900: "#6F0D1E",
  950: "#3E040D",
  DEFAULT: "#C8102E",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy,
        forest,
        brass,
        red: signal,
        signal,
        paper: "#F7F5F0",
        // warm the coolest gray so "bg-slate-50" sections sit on the paper tone
        slate: { 50: "#F7F5F0", 500: "#5B6578" },
        charcoal: "#1F2937",
        // stock scales remapped to the brand
        blue: navy,
        indigo: navy,
        sky: navy,
        purple: navy,
        violet: navy,
        cyan: navy,
        teal: navy,
        emerald: forest,
        green: forest,
        amber: brass,
        yellow: brass,
        orange: signal,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-inter)", "sans-serif"],
      },
      fontWeight: {
        // "font-black" headings read as shouting; cap them at 800
        black: "800",
      },
      borderRadius: {
        // one calm radius family instead of pill-and-bubble shapes
        xl: "0.5rem",
        "2xl": "0.625rem",
        "3xl": "0.75rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
