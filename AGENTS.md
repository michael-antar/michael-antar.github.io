# Repository Guidelines

## Project Overview

Michael Antar's personal portfolio: a static, single-page React 19 + TypeScript application built with Vite 7 and Tailwind CSS v4. It presents experience, projects, education, and skills, and deploys to GitHub Pages from `main`. There is no backend, router, runtime data fetching, or global state store.

## Architecture & Data Flow

- `src/main.tsx` mounts the app in `StrictMode` and provides class-based light/dark/system theming through `next-themes`.
- `src/App.tsx` is the composition root: `Layout` contains the navigation, animated background, section grid, and footer.
- Content flows one way: static arrays in `src/data/` -> section props/imports -> reusable components and badges. `App.tsx` explicitly passes `experienceData` and `projectsData`; skills and categories are imported where rendered.
- `Section.tsx` supplies the shared animated card wrapper. Navigation uses `react-scroll` against section IDs rather than routes.
- State is limited to theme context and local UI state such as project hover. There is no dependency-injection layer, async service layer, or application error-handling convention.
- Theme-aware colors and media use light/dark pairs. Semantic CSS variables in `src/index.css` connect Tailwind utilities to the `.dark` class set by `next-themes`.
- Vite emits static `dist/`; GitHub Actions publishes that directory to Pages with `base: '/'`.

When adding a section, give its `Section` an `id` and add the matching `Navbar` link. The scroll offset in `Navbar.tsx` is coupled to the sticky header height. Use `resolvedTheme`, not `theme`, when selecting theme-specific assets so `system` mode works.

## Key Directories

| Path | Purpose |
| --- | --- |
| `src/components/` | Page sections, layout, navigation, theme controls, and animation |
| `src/components/ui/` | Generated shadcn/ui primitives; prefer regenerating over ad hoc redesign |
| `src/data/` | Experience, project, skill, and skill-category content plus their types |
| `src/assets/` | Imported images and light/dark demo videos; Vite hashes these assets |
| `src/lib/` | Shared utilities, currently `cn()` for class composition |
| `public/` | Files copied verbatim to the site root, such as `/resume.pdf` and `/og-image.png` |
| `.github/workflows/` | GitHub Pages build and deployment |

Most content edits belong in `src/data/`. Exceptions include hero/footer copy and `educationSkills` in `EducationSection.tsx`.

## Development Commands

| Task | Command |
| --- | --- |
| Reproducible install | `npm ci` |
| Install/update dependencies | `npm install` |
| Start Vite development server | `npm run dev` |
| Typecheck and production build | `npm run build` |
| Typecheck only | `npx tsc -b` |
| Lint TypeScript/TSX | `npm run lint` |
| Preview the production build | `npm run preview` |
| Format selected paths | `npx prettier --write <paths>` |

Scope Prettier to changed paths; `dist/` is not in `.prettierignore`. Pushing to `main` or manually running the Pages workflow deploys the site. CI runs `npm ci` and `npm run build`, but not lint, formatting, or tests.

## Code Conventions & Common Patterns

- Handwritten code uses four-space indentation, single quotes, semicolons, and named component exports. Generated files under `src/components/ui/` retain shadcn's style.
- Use `@/` for cross-directory imports (`@/data/skills`, `@/assets/...`); local relative imports are also present within components.
- TypeScript is strict. Unused locals/parameters fail `npm run build`; use `import type` or inline `type` imports as required by `verbatimModuleSyntax`.
- Use Tailwind utilities and semantic tokens from `src/index.css`. Tailwind v4 is configured in CSS with `@theme` and `@custom-variant`; do not add a separate Tailwind config unless intentionally changing that setup. Use `cn()` for conditional classes.
- Add shadcn primitives under `src/components/ui/` using the aliases in `components.json`. Use the declared `motion/react` package for new animation code.
- Keep experience/project content typed and data-driven. Projects require light/dark video and thumbnail fields; project descriptions may be JSX, hence `projects.tsx`.
- Skill names are case-sensitive keys in `SKILLS_DATA`. Unknown strings silently receive a hash-selected color and no icon, so add or verify the registry entry when introducing a skill.
- Preserve Git LFS for `*.mp4`; run `git lfs pull` if local videos are pointer files. Reference `public/` assets with root-relative URLs.
- Avoid introducing state management, fetching, or routing for static-content-only changes; follow the existing direct data/props pattern.

## Important Files

| File | Role |
| --- | --- |
| `index.html` | HTML mount point, metadata, font links, and social preview metadata |
| `src/main.tsx` | React entry point and theme provider |
| `src/App.tsx` | Section composition and top-level data injection |
| `src/index.css` | Tailwind v4 setup and light/dark design tokens |
| `src/data/projects.tsx` | Project schema, JSX descriptions, and media imports |
| `src/data/skills.ts` | Skill registry, icons, colors, and fallback behavior |
| `vite.config.ts` | React/Tailwind plugins, `@` alias, and root Pages base |
| `tsconfig.app.json` | Strict application compiler settings |
| `components.json` | shadcn/ui generation settings and aliases |
| `eslint.config.js` | TypeScript, React Hooks, and React Refresh lint rules |
| `.github/workflows/deploy.yml` | Build and GitHub Pages deployment |

## Runtime/Tooling Preferences

- Use **Node.js and npm**, not Bun, Yarn, or pnpm; `package-lock.json` is the lockfile.
- Use Node `^20.19.0` or `>=22.12.0` to satisfy Vite 7. No repository Node version is pinned; CI currently selects `lts/*`.
- No environment variables or secrets are required by the application.
- Keep `base: '/'` while deploying to `https://michael-antar.github.io/`; changing hosting to a subpath requires URL and metadata changes.
- `dist/` and TypeScript incremental state are generated artifacts; do not edit them.

## Testing & QA

There is currently **no test framework, test script, test suite, or coverage requirement**. Do not report a nonexistent `npm test` command as a check.

Before finishing a change:

1. Run `npm run build` and `npm run lint`.
2. For visual or interaction changes, run the app or production preview and exercise the affected surface. Check responsive layout, navigation, and light/dark/system themes as relevant.
3. For project-media changes, verify thumbnails and hover videos with actual Git LFS content, not pointer files.

CI's only automated gate is the production build. Adding a test runner or coverage tooling is new infrastructure, not an existing repository convention.
