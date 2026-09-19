# KNYA Scrubs Customizer Update

## What will change
- Add Men's and Women's scrub categories to the centralized scrub inventory.
- Add the requested gender-specific color ranges, with every variant priced at NRS 2,500.
- Generate a cohesive sample product image for every gender and color combination.
- Add the uploaded KNYA logo to the scrubs page.
- Update the customizer flow to Gender → Type → Color → Size, filtering colors and preview imagery by gender.
- Preserve cart quantity handling and include gender, type, color, and size in each cart line and WhatsApp order.

## Technical details
- Extend scrub product data with gender and image references.
- Extend cart item variants with an optional gender field and include it in the unique cart item ID.
- Keep existing scrub types and sizes unchanged.
- Use the existing design system and button components while replacing the icon-only preview with the selected generated product image.
- Verify selection changes, add-to-cart behavior, cart details, and the mobile layout in the running preview.
