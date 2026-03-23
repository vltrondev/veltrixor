# Task 14 (Special): UI/UX Harmonization of Auth & Pricing
**Assigned to:** Frontend Specialist Agent
**Phase:** 5 (Final Polish)

## Objective
Refine and unify the visual identity of the Authentication flow (Veltrixor ID) and the Product Pricing pages to ensure they feel like a single, high-fidelity ecosystem.

## Functional Requirements
1. **Visual Unification**:
   - Ensure `Login.jsx`, `Register.jsx`, `LaborSignalInfo.jsx`, and `PriceTrackrInfo.jsx` share the exact same glassmorphism depth and animation timing.
   - Standardize the "Corporate Premium" inputs and cards across these four critical pages.
2. **Seamless Transition**:
   - Refine the transition between the Pricing cards (when a user selects a plan) and the Checkout/Login flow. It must feel like a natural progression, not a page jump.
3. **Branding "Veltrixor ID"**:
   - Add subtle branding elements (e.g., a "Powered by Veltrixor ID" badge or a specific header style) to all Auth and Checkout interfaces to reinforce the "Global Account" concept.
4. **Interactive Pricing**:
   - Add hover states to pricing cards that "glow" with the product's accent color (Electric Blue for LaborSignal, Green for PriceTrackr).

## UI/UX Requirements
- **Micro-animations**: Use `framer-motion` (if available) or CSS transitions to make the pricing-to-auth flow feel elastic and modern.
- **Glassmorphism**: Consistent `--vt-glass-blur` and `--vt-glass-bg` usage.
- **Visual Feedback**: Real-time validation feedback in Auth forms that matches the Veltrixor design language.

## Location
- Refine `src/pages/Login.jsx`, `src/pages/Register.jsx`
- Refine `src/pages/LaborSignalInfo.jsx`, `src/pages/PriceTrackrInfo.jsx`
- Update `src/components/ui/VeltrixorCheckout.jsx`

## Veltrixor Note
The perception of a "Global Ecosystem" is built on consistency. These pages are the user's first touchpoints; they must be visually identical in quality and style.
