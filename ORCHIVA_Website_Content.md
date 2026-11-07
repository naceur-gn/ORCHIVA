# ORCHIVA Technologies: Website Content & Brand System (Version 1.1)

> **Institutional Benchmark:** Aligned with European institutional standards (inspired by the prestige, sobriety, and long-term independence of [ODDO BHF](https://www.oddo-bhf.com/fr)).  
> **Rule of Evidence (Strategic Document v1.1):** Zero unproven water-saving percentages or yield claims. All indicators distinguish between direct physical sensor measurements, FAO-56 calculations, and agronomist-supervised recommendations.

---

## Brand & Product Architecture

- **Umbrella Company:** **ORCHIVA Technologies** (Master Brand)  
  *Logo:* **Direction A (Citrus Ring)**
- **First Project & Product:** **CITRUSFLOW** (*"CITRUSFLOW, a product by ORCHIVA Technologies"*)  
  *Logo:* **Direction B (Flow Node)**
- **Product Family Roadmap:**
  1. **CITRUSFLOW Monitor** (Current MVP Pilot Phase — Soil, Flow, Pressure, Pump Telemetry)
  2. **CITRUSFLOW Control** (Phase 2 — Remote valve and pump automation with local manual override, added only after monitoring validation)
  3. **CITRUSFLOW Intelligence** (Phase 3 — Predictive models and deficit irrigation forecasting after multi-season local data)

---

## Initial Beachhead Market

- **Geography:** Cap Bon / Nabeul Governorate, Tunisia (Nabeul, Menzel Bouzelfa, Beni Khaled, Grombalia, Soliman).
- **Target Segment:** Commercial irrigated citrus orchards (oranges, mandarins, lemons) with existing drip/micro-irrigation infrastructure.
- **Pilot Scope:** 1 farm, 1 irrigation zone, 2 soil monitoring stations (2 depths), 1 pulse flow meter, 1 line pressure transducer, pump runtime/energy view, and 1 LoRaWAN gateway.

---

## Live System Endpoints & Architecture

- **Production URL:** [http://localhost:8000](http://localhost:8000) (FastAPI + React Production Build)
- **Development URL:** [http://localhost:3000](http://localhost:3000) (Vite React HMR Server)
- **API Documentation:** [http://localhost:8000/docs](http://localhost:8000/docs) (Swagger UI)
- **Telemetry Endpoint:** `GET /api/telemetry/live`
- **Application Endpoint:** `POST /api/pilot/apply`
