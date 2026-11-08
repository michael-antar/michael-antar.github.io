# Repository Guidelines

## Project Overview

Michael Antar's personal portfolio: a static, responsive, single-page site written
as handwritten HTML and CSS. It presents experience, projects, education, and
skills, and deploys to GitHub Pages from `main`. There is no framework, package
manager, build step, dependency lockfile, runtime JavaScript, router, or data
fetching. `site/` is the live document and the complete Pages artifact.

## Architecture & Data Flow

- `site/index.html` is the entire document: head metadata, inline icon sprite,
  header, sections, and footer. Content is authored directly in the markup; there
  is no template layer, data file, or state store.
- `site/styles.css` owns every style: the six design tokens, typography, layout
  grids, timeline, badges, and focus states.
- `site/assets/` holds the raster media: organization logos, the ASU seal, the
  Orderly posters, and the two demo videos.
- `site/favicon.svg`, `site/resume.pdf`, and `site/og-image.png` are published
  from the site root with root-relative URLs such as `/resume.pdf`.
- Only `site/` is uploaded. Root files (`README.md`, `AGENTS.md`, `.github/`,
  `.gitignore`, `.gitattributes`) are repository housekeeping and are never
  published.
- `.github/workflows/deploy.yml` checks out with `lfs: true` and uploads `./site`
  directly with `actions/upload-pages-artifact`. There is no install or build
  job.

## Design Philosophy

- Reach for the simplest native browser capability first: anchors for
  navigation, native video controls with `poster` attributes for the demo,
  `prefers-color-scheme` for theming.
- No framework, build pipeline, or runtime JavaScript on this page. If a feature
  seems to need JavaScript, prefer dropping the feature or finding a native
  control.
- Content and typography outrank decoration. Add structure and whitespace, not
  ornament.
- Avoid scroll hijacking, parallax, autoplay, continuous animation, and
  disclosures that exist for their own sake. Use subtle interaction only when it
  aids usability, and respect `prefers-reduced-motion` if motion is ever
  introduced.
- Keep media opt-in: each demo video carries a native `poster` plus native
  controls, so the WebP poster arrives as an image and the MP4 stays off the
  wire until an explicit Play. Never autoplay or preload demo video.

## Visual System

- Font stack, everywhere:
  `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Do not
  ship, download, or link font files.
- Six semantic tokens, defined once in `:root` and redefined in
  `@media (prefers-color-scheme: dark)`:

  |Token|Light|Dark|
  |---|---|---|
  |`--background`|`#fafafa`|`#111113`|
  |`--foreground`|`#18181b`|`#f4f4f5`|
  |`--muted`|`#52525b`|`#a1a1aa`|
  |`--surface`|`#f4f4f5`|`#1c1c1f`|
  |`--border`|`#e4e4e7`|`#303034`|
  |`--accent`|`#1d4ed8`|`#93c5fd`|

  `color-scheme` follows the same media query so native controls and scrollbars
  match. The OS preference is the only theme selector: no toggle, no stored
  preference, no manual override.
- One accent color on a neutral palette; all text/background pairs stay above
  WCAG AA. Do not reintroduce per-skill or per-category color generation.
- Layout: `.layout` is one column in DOM order (Hero, Education, Experience,
  Projects) and two equal columns at `min-width: 64rem` with a `3rem` gap. The
  project media and details sit side by side only at `64rem` and wider.
- Organization logos stay small and unstretched:
  `max-width: 7.5rem; max-height: 1.5rem; width: auto; height: auto`. The ASU
  seal is `7rem` wide at every viewport; do not reintroduce the old square crop
  or desktop-only hiding.
- Sticky header height is coupled to `scroll-margin-top` on the section targets
  (`6rem`, `8rem` below `36rem`). Changing header padding or the wrapping break
  requires updating those values.
- Native hash navigation highlights the matched `.section:target` with a 1px
  accent outline that fades to transparent over two seconds. The animation is
  color-only and lives behind `prefers-reduced-motion: no-preference`, so reduced
  motion keeps a static accent outline; neither the outline nor the animation
  changes section geometry. The global `:focus-visible` outline stays
  independent of it.

## Performance

- No third-party requests: no CDN, analytics, fonts, or external stylesheets.
- Give every `<img>` intrinsic `width` and `height`, plus `loading="lazy"` and
  `decoding="async"` for anything below the fold.
- Raster UI images are WebP sized to roughly 3x their maximum CSS box. Keep
  `site/og-image.png` as PNG: social platforms read it independently of page
  weight.
- Never add `autoplay` or `preload="auto"` to the demo videos. `preload="none"`
  plus native controls keeps the MP4s off the wire until an explicit Play.
- The two themed demo videos are plain `<video>` elements whose `poster`
  attributes point at the light and dark WebP thumbnails; the matching
  `.video-light`/`.video-dark` rules hide one of them per color scheme. Do not
  reintroduce a `<details>` disclosure, a custom Play label, or a `<source
  media>` inside `<video>`.
- Theme-specific images use `<picture>` with a
  `<source media="(prefers-color-scheme: dark)">` and a light `<img>` fallback.
- `site/assets/*.mp4` must stay Git LFS objects; `.gitattributes` is unchanged.

## Authoring

- Four-space indentation, double-quoted attributes, semantic HTML, one `h1`, and
  section-level `h2` headings. Skill category titles are `h3` under a
  visually-hidden `h2` so the heading order never skips a level.
- Contact and project links carry visible text, which is their accessible name;
  do not add an `aria-label` that repeats it. External links keep
  `target="_blank" rel="noopener noreferrer"`.
- Focus must stay visible: keep the global `:focus-visible` outline and the skip
  link that appears on focus.
- Navigation uses plain anchors with hashes; no smooth-scroll script, no
  `pushState`. The visited-section highlight is CSS `.section:target` only.
- Inline SVGs that repeat visible text are decorative: `aria-hidden="true"` and
  no `<title>`. Do not duplicate a badge name inside its SVG.
- Edit copy directly in `site/index.html`. Skill strings are exact, case-sensitive
  strings; only add an icon reference (`<use href="#i-…">`) when a matching path
  already exists in the sprite. Skills without an icon stay iconless.
- The sprite holds only Simple Icons technology paths, under the CC0 1.0
  provenance comment inside it. Copy new paths verbatim and keep that comment;
  no icon set with a license body belongs back in the document.
- Handwritten CSS only: no preprocessor, no utility framework, no generated
  stylesheet. Prefer the existing tokens over new colors or sizes.

## Key Files

|File|Role|
|---|---|
|`site/index.html`|Complete document: metadata, icon sprite, content, demo videos|
|`site/styles.css`|Design tokens, typography, layout, components, focus states|
|`site/assets/`|Logos, seal, posters, and Git LFS demo videos|
|`site/og-image.png`|Social preview image referenced by the Open Graph tags|
|`.github/workflows/deploy.yml`|Uploads `site/` to GitHub Pages|

## Local Development

Serve the publish root; there is no install or build step:

```sh
python3 -m http.server 4173 --directory site
```

Then open `http://127.0.0.1:4173/`. Pushing to `main` or manually dispatching the
Pages workflow deploys `site/`.

## Verification

There is no test framework, test script, linter, or build check in this
repository. Do not claim an `npm test`, build, lint, or deployment check exists;
CI deploys but neither builds nor tests.

Before finishing a change, exercise it against the real static server:

1. Load the page at desktop and mobile widths; confirm the two-column and
   single-column layouts, no horizontal overflow, and the section order.
2. Switch the emulated color scheme and confirm both themes: tokens, native
   control color scheme, dark logo and poster variants, and readable muted text.
3. From a fresh network capture, assert no script requests, no external or font
   requests, no `.mp4` requests before Play, no console errors, and no 404s.
4. Confirm each color scheme shows its own demo poster with native controls in
   the same place, that both videos stay paused until the visible native Play
   control is used, and that playback then starts, advances, and pauses.
5. Tab through the skip link, navigation, contact links, and video controls;
   focus must remain visible and anchors must land below the sticky header.
6. Confirm every referenced asset resolves (`/styles.css`, `/resume.pdf`,
   `/og-image.png`, `/favicon.svg`, and each `site/assets/` file).
