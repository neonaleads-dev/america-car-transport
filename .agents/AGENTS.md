# America Car Transport Design System

The user has explicitly approved the "TransportVibe" minimalist SaaS aesthetic as the FINAL design direction for this project. All future components, pages, and edits MUST adhere to this design system.

## UI/UX Rules
1. **Minimalist & Clean:** Avoid heavy backgrounds, dark overlays, and aggressive "architectural" aesthetics. Use clean negative space.
2. **Color Palette:**
   - Backgrounds: `bg-slate-50`, `bg-white`, `bg-[#f8fafc]`.
   - Text: `text-slate-900` for headings, `text-slate-600` for body text.
   - Primary Accent: `blue-600` (for buttons, icons, active states).
   - Secondary Accents: `green-500` (for success/trust indicators).
3. **Typography:**
   - Use standard sans-serif fonts (`font-sans`).
   - Headings should be bold (`font-bold` or `font-black`) with tight tracking (`tracking-tight`).
   - Body text should be highly legible and clean.
4. **Animations:**
   - DO NOT use aggressive GSAP choreography (e.g., heavy pre-loaders, 3D character rotations, extreme clip-paths).
   - Use simple, fast fade-ins and slide-ups (`opacity: 0` to `1`, `y: 20` to `0`).
   - The site must feel instantaneous and performant.
5. **Components:**
   - Cards and containers should use `bg-white` with soft borders (`border-slate-100` or `border-slate-200`) and soft shadows (`shadow-sm`, `shadow-md`, or `shadow-xl`).
   - Inputs should be clean with subtle borders and clear focus states.
