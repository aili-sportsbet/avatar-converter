# Headshot Prompt Studio

A web app for generating AI avatar and headshot prompts. Choose from 32 curated style presets, fine-tune subject details, scene settings, and quality sliders, then copy the composed prompt for use with image generation models.

## Features

- **32 style presets** — Studio Executive, Cinematic, Editorial, B&W, Illustrated, and more
- **Format picker** — Headshot, Avatar, or Founder portrait
- **Subject controls** — target vibe, expression, wardrobe
- **Scene controls** — background, lighting, color palette preview
- **Detail sliders** — face match, realism, polish, approachability, creativity
- **Negative prompt tab** — pre-built exclusions to avoid common AI artifacts
- **Model syntax toggle** — appends Midjourney-style flags (`--ar`, `--style raw`, `--v 6`)
- **Randomize & Reset** — quickly explore combinations or return to defaults
- **Clipboard copy** — one-click copy with secure context fallback

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** for dev server and production builds
- **CSS Modules** for scoped component styles
- **ESLint** for linting

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── types/index.ts              # Shared TypeScript interfaces
├── data/styles.ts              # Style presets, option lists, defaults
├── hooks/
│   ├── usePromptBuilder.ts     # Prompt composition logic
│   └── useClipboard.ts         # Clipboard API with fallback
├── components/
│   ├── Header.tsx              # Top bar with copy and randomize buttons
│   ├── ControlsPanel.tsx       # Left sidebar with all controls
│   ├── StyleGrid.tsx           # Style preset picker grid
│   ├── RangeSlider.tsx         # Reusable range input component
│   ├── Portrait.tsx            # CSS-only portrait illustration
│   └── OutputPanel.tsx         # Prompt/negative tabs and output textarea
├── App.tsx                     # Root component and state management
├── index.css                   # Global CSS variables and resets
└── main.tsx                    # React entry point
```

## License

Private project.
