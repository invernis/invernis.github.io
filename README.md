# invernis.com

Source of [invernis.com](https://invernis.com), the website of INVERNIS GmbH, Switzerland.

It is a plain static site served by GitHub Pages: no framework, no build step and no dependencies.

## Structure

| Path | Contents |
| :--- | :--- |
| `index.html` | Homepage (English; German texts kept for later) |
| `404.html` | Page shown for unknown addresses |
| `imprint.html`, `privacy.html` | Imprint and privacy policy, served as `/imprint` and `/privacy` |
| `assets/css/site.css` | All styles. Colours are CSS variables at the top; the dark theme is `:root[data-theme="dark"]` |
| `assets/js/site.js` | Language and theme switches |
| `assets/img/` | Hero photo in a light and a night version, each at 2640, 1320 and 800 px; browsers pick the size they need |
| `assets/brand/` | Original logo files |
| `assets/fonts/` | Jost, self-hosted under the SIL Open Font License (`OFL.txt`) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Site icons |
| `CNAME` | Custom domain for GitHub Pages |

## Languages and themes

- The site is currently in English only. The German texts stay in the markup, as `<span lang="de">` next to each `<span lang="en">`, so German can return later. New text always needs both versions.
- The page shows the version that matches the `data-lang` attribute on `<html>`. The languages on offer are listed in `data-langs`.
- To turn German back on in a page: set `<html lang="de-CH" data-lang="de" data-langs="de en">`, remove `hidden` from the language switch (`<div class="lang">`), and switch the page title and description back to German.
- German is written in Swiss Standard German: «ss» instead of «ß», «Guillemets» and the formal «Sie».
- The light theme is the default for every visitor and does not follow the device setting. The dark theme uses indigo `#211D3F` and the night version of the photo.
- Both choices are stored in the browser (`localStorage` keys `inv-lang` and `inv-theme`). A short script in `<head>` applies them before the page is drawn, so the page does not flicker.

## Local preview

Any static file server works, for example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. GitHub Pages serves `imprint.html` as `/imprint` and `privacy.html` as `/privacy`; a simple local server needs the `.html` ending, for example http://localhost:8000/imprint.html.

## Deployment

Every push to `main` publishes the site through `.github/workflows/deploy.yml`. In the repository settings, Pages must use "GitHub Actions" as its source. The workflow copies the site files into a folder and publishes it without building anything, so a new top-level file or folder must also be added to the `cp` line in the workflow.

## Credits

- Hero photo: [Gaétan Meyer on Unsplash](https://unsplash.com/photos/snow-capped-mountain-WemqIKiduMo), used under the Unsplash License.
- Typeface: [Jost](https://github.com/indestructible-type/Jost) by indestructible type*, SIL Open Font License 1.1.

## Copyright

© 2026 INVERNIS GmbH. The INVERNIS name, logo and website texts are not covered by any open-source licence and may not be reused without permission.
