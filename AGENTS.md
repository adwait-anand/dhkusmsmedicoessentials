# Project architecture rules

- Homepage campaign media is bundled from `src/assets/home` because the asset-proxy route returns the app shell instead of image bytes in this project preview.
- Storefront theme is forced light and all visual roles use global semantic tokens so the white-and-green design stays consistent across pages.
- Carousel frames use a stable 16:9 aspect ratio with contain fitting; narrow layouts put captions below images so supplied artwork remains readable.
