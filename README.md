# Mint Dental — Phase 1

Responsive React + Vite + TypeScript + Tailwind CSS starter for the premium mint-green dental clinic concept.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Included in Phase 1
- Responsive sticky navbar with mobile menu
- Premium mint-green hero section
- CTA buttons and placeholder trust indicators
- CSS tooth visual placeholder
- Dedicated `ThreeScenePlaceholder` component
- Intro, treatments preview and appointment CTA sections
- Reduced-motion support

## Next
Replace `src/three/ThreeScenePlaceholder.tsx` with the shared React Three Fiber `<Canvas>` in the 3D implementation phase. Keep one shared scene mounted and synchronize model transforms to the scroll timeline.

## Before using for a real clinic
Replace the demo brand, contact details, claims, testimonials, doctor information and treatment content with verified clinic-approved information. Connect the appointment CTA to a real booking workflow.
