# Direction A in use — Design Reference & Corporate Identity

This is the design mockup and reference implementation for **ORCHIVA Technologies**' master corporate brand identity.

## Brand Identity Decision
- **Company Name:** ORCHIVA Technologies
- **Corporate Master Logo:** **Direction A (Citrus Ring)**
  - Vector Assets: [`../assets/direction-a-corporate-logo.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-a-corporate-logo.svg), [`../assets/direction-a-reversed-dark.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-a-reversed-dark.svg), and [`../assets/direction-a-corporate-mark.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-a-corporate-mark.svg).
- **Application Suite Logos:**
  - **Direction B (Flow Node):** **CITRUSFLOW App** ([`../assets/direction-b-app-citrusflow.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-b-app-citrusflow.svg)) — Hydraulic monitoring & water volume telemetry.
  - **Direction C (Sprout):** **ORCHIVA GROW App** ([`../assets/direction-c-app-orchiva-grow.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-c-app-orchiva-grow.svg)) — Soil moisture dynamics & root-zone analytics.
  - **Direction D (Circuit Tree):** **ORCHIVA LINK App** ([`../assets/direction-d-app-orchiva-link.svg`](file:///c:/Users/gnich/Desktop/orchiva/assets/direction-d-app-orchiva-link.svg)) — LoRaWAN field telemetry gateway & hardware diagnostics.

Treat this mockup as a **reference mockup**, not production code: the markup and inline styles carry the design's precise values — colors, font sizes, spacing, radii, shadows, layout — which an implementation should replicate faithfully.

## Contents

- `Applications.dc.html` — The artboard (a Design Component: an `<x-dc>` template + a small logic class).
- `support.js`, `vendor/react*.js` — The runtime that renders the component in a browser.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `Applications.dc.html`; some browsers block the scripts over `file://`.
