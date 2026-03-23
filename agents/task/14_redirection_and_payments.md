# Task 14: SSO Redirection and Payment Flow Simulation
**Assigned to:** Frontend Specialist Agent
**Phase:** 5 (Technical Validation)

## Objective
Simulate the Single Sign-On (SSO) redirection to the product subdomains and create a mockup for the payment/subscription checkout process.

## Functional Requirements
1. **SSO Simulation**:
   - In the Launchpad (`Dashboard.jsx`), when clicking "Access Application", show a temporary transition modal or overlay saying "Authenticating with [Product]...".
   - Simulate the generation of a Secure Token and its inclusion in the redirect URL.
2. **Checkout Mockup**:
   - Create a simplified checkout view or modal for when a user clicks "Activate Now" or a specific plan.
   - Include fields for credit card details (styled mockup, no actual processing).
   - Use `VeltrixorCard` for the layout and ensure it looks "Corporate Premium".
3. **Success Redirection**:
   - After a "successful" mockup payment, update the user's subscription status in the `AuthContext` (metadata update) and redirect back to the Dashboard with a success message.

## UI/UX Requirements
- **Transitions**: Smooth fade-in/out for the "Redirecting" state.
- **Form Design**: Clean, minimal input fields with validation feedback.
- **Brand Consistency**: Maintain the deep black and electric blue palette.

## Location
- Update `src/pages/Dashboard.jsx` for SSO logic.
- Create `src/components/ui/VeltrixorCheckout.jsx` (Reusable modal or component).

## Veltrixor Note
The SSO flow is vital for the ecosystem's perception. It must feel seamless and secure, even if it's a simulation for now.
