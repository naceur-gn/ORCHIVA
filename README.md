# ORCHIVA Technologies — Web Platform

Institutional website for **ORCHIVA Technologies**, presenting the company and its first product **CITRUSFLOW** — an integrated irrigation-performance monitoring system for citrus orchards.

Built with **FastAPI** (Python) + **React** (Vite), styled in a restrained institutional aesthetic inspired by [ODDO BHF](https://www.oddo-bhf.com/fr).

> **Status:** Product under development — no clients, no partners, no field deployments yet.  
> **Rule:** Zero fake data, zero unproven claims. All content reflects the real current stage.

---

## Project Structure

```
orchiva/
├── backend/                  # Python FastAPI Backend
│   ├── main.py               # REST API & Static Frontend Mount
│   ├── models.py             # Pydantic Models (PilotApplication, Telemetry)
│   ├── requirements.txt      # fastapi, uvicorn, pydantic
│   └── data/                 # Pilot Application Submissions (JSON)
│
├── frontend/                 # React Client (Vite)
│   ├── src/
│   │   ├── components/       # TopBar, Header, Hero, SolutionsPillars,
│   │   │                     # InteractiveTelemetry, Methodology, RoadmapSection,
│   │   │                     # PilotSection, AboutSection, PilotForm, Footer
│   │   ├── i18n.js           # Bilingual Dictionary (FR / EN)
│   │   ├── App.jsx           # Root Component with Scroll Animations
│   │   ├── App.css           # Institutional Layout & Animation System
│   │   └── index.css         # Brand Palette, Typography & CSS Variables
│   ├── public/assets/        # SVG Logos (Direction A corporate, Direction B CITRUSFLOW)
│   ├── dist/                 # Production React Build (served by FastAPI)
│   └── vite.config.js        # Dev Server (port 3000) & API Proxy
│
├── assets/                   # Master SVG Vector Source Files
│   ├── direction-a-corporate-logo.svg
│   ├── direction-a-reversed-dark.svg
│   ├── direction-a-corporate-mark.svg
│   ├── direction-b-app-citrusflow.svg
│   ├── direction-c-app-orchiva-grow.svg   # Reserved for future use
│   └── direction-d-app-orchiva-link.svg   # Reserved for future use
│
├── Direction A in use-html/  # Original logo design artboard (reference only)
├── Four directions-html/     # Original 4-direction logo artboard (reference only)
│
├── ORCHIVA_Website_Content.md  # Brand & Content Specification
└── README.md                   # This file
```

---

## Brand Architecture

| Tier | Logo | Identity |
|---|---|---|
| **Company** | Direction A *(Citrus Ring)* | **ORCHIVA Technologies** — corporate identity, website header, legal docs |
| **Product** | Direction B *(Flow Node)* | **CITRUSFLOW** — irrigation monitoring platform (first product) |

### CITRUSFLOW Product Roadmap

1. **CITRUSFLOW Monitor** — Current MVP under development (soil, flow, pressure, pump telemetry)
2. **CITRUSFLOW Control** — Future phase (remote valve/pump automation)
3. **CITRUSFLOW Intelligence** — Long-term (predictive models, deficit irrigation forecasting)

---

## Brand Palette

| Token | Hex | Usage |
|---|---|---|
| Forest | `#0F3B2E` | Primary corporate, headers, high-contrast |
| Leaf | `#1F7A57` | Active navigation, primary buttons |
| Fresh | `#5DB58A` | Success states, health indicators |
| Mist | `#EAF3EC` | Surface backgrounds, card framing |
| Citrus | `#E8A33D` | Focal accents only (alerts, badges) |

**Typography:** Manrope (headings) · Inter (body) · JetBrains Mono (technical data)

---

## Quick Start

### 1. Backend (FastAPI — Port 8000)

```powershell
pip install -r backend/requirements.txt
python -m uvicorn backend.main:app --reload --port 8000
```

- Production site: [http://localhost:8000](http://localhost:8000) (serves React build from `frontend/dist/`)
- API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

### 2. Frontend Dev Server (Vite — Port 3000)

```powershell
cd frontend
npm install
npm run dev
```

- Dev URL: [http://localhost:3000](http://localhost:3000)
- Proxies `/api/*` to FastAPI on port 8000

### 3. Production Build

```powershell
cd frontend
npm run build
```

Output goes to `frontend/dist/`, automatically served by FastAPI.

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Service health check |
| `GET` | `/api/telemetry/live` | Telemetry snapshot (specification reference data) |
| `POST` | `/api/pilot/apply` | Submit pilot interest application |
| `GET` | `/api/pilot/applications` | List submitted applications |

---

## Bilingual Support

The website supports **French (FR)** and **English (EN)** via a language switcher in the top bar. All user-facing text is stored in [`frontend/src/i18n.js`](frontend/src/i18n.js).
