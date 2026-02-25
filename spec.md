# Specification

## Summary
**Goal:** Update the Desi Mango 10 kg box price to ₹350 in the PreOrderForm.

**Planned changes:**
- Update the Desi Mango 10 kg box variant price from its current value to ₹350 per box in `PreOrderForm.tsx`
- Update the dynamic total price calculation to use ₹350 per box when Desi Mango + 10 kg box is selected
- Update the pre-filled WhatsApp message to reflect ₹350 per box for Desi Mango 10 kg box orders

**User-visible outcome:** When a user selects Desi Mango with a 10 kg box in the pre-order form, the total price calculates at ₹350 × quantity and the WhatsApp message reflects the correct price.
