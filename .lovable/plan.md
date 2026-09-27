# Homepage header and carousel redesign

## What will change
- Add a slim, full-width announcement bar with the supplied medical essentials message.
- Rebuild the header with a left menu button, centered DH-KUSMS brand mark and name, plus profile and cart controls on the right.
- Replace the current homepage intro with a full-bleed, three-image carousel using the uploaded banners.
- Auto-advance every three seconds, include accessible slide controls, and pause when motion reduction is requested.
- Add a bottom-centered headline and Shop Now action on each slide without obscuring the supplied banner content.
- Add the yellow infinite ticker directly beneath the carousel with the requested product categories.
- Preserve the existing categories, shop details, cart behavior, theme behavior, and inner pages.

## Technical details
- Store the uploaded banners and brand mark through the project asset flow; keep a real favicon file in `public/`.
- Keep the header reusable across existing pages while showing the announcement bar consistently.
- Use semantic theme tokens for the new yellow ticker and carousel overlays.
- Verify the homepage visually at desktop and mobile sizes, including carousel timing, controls, links, and cart access.
