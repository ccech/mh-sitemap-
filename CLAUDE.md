# MH_Sitemap — Claude Context

## What this project is
An interactive browser-based strategy tool for MH's website redesign. It maps two buyer personas to site architecture, scores pages by strategic heat, and produces a homepage routing brief.

## Strategy doc
Source: `Downloads/Website_Persona_Mapping_Strategy.docx`

## Two personas
- **HR / Benefits Leader** — primary buyer, evaluates fit, conversion = Request Demo
- **Broker / Benefits Consultant** — influencer, vets for client portfolio, conversion = Download resource

## 6-phase process (per strategy doc)
1. Persona Foundation → `data/personas.js`
2. User Story Development → `data/user-stories.js`
3. Sitemap Finalization → `data/sitemap.js` (**awaiting user input**)
4. Flow Mapping → `data/flows.js` (run `npm run flows` after sitemap is ready)
5. Heat Map & Gap Analysis → `data/heat-map.js` (run `npm run score`)
6. Homepage Brief → `data/homepage-brief.js` (run `npm run brief`)

## Views
- `index.html` — Heat Map Dashboard (Phase 5)
- `flows.html` — Per-Persona Flow Diagrams (Phase 4)
- `homepage-brief.html` — Homepage Routing Strategy (Phase 6)

## Data files
All data files in `data/` are `.js` files that set `window.*` globals so they work via `file://` protocol without a server. Run `npm run build` after updating inputs to regenerate derived data.

## Inputs needed
- `inputs/sitemap.*` — raw sitemap from client (CSV, JSON, or paste as text)
- `inputs/jtbd.*` — JTBD document when available

## Key design principle (from strategy doc)
> The homepage is not a brand statement. It is a routing layer.
