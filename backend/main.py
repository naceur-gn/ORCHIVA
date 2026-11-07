from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from datetime import datetime
import uuid
import json
import os
from pathlib import Path

try:
    from backend.models import PilotApplication, PilotApplicationResponse, TelemetrySnapshot
except ImportError:
    from models import PilotApplication, PilotApplicationResponse, TelemetrySnapshot

app = FastAPI(
    title="ORCHIVA Technologies — CITRUSFLOW API",
    description="Backend API for ORCHIVA Technologies & CITRUSFLOW: Precision Citrus Irrigation Telemetry",
    version="1.1.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = Path(__file__).parent / "data"
DATA_DIR.mkdir(exist_ok=True)
APPLICATIONS_FILE = DATA_DIR / "pilot_applications.json"

if not APPLICATIONS_FILE.exists():
    with open(APPLICATIONS_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

def save_application(app_data: dict):
    with open(APPLICATIONS_FILE, "r", encoding="utf-8") as f:
        records = json.load(f)
    records.append(app_data)
    with open(APPLICATIONS_FILE, "w", encoding="utf-8") as f:
        json.dump(records, f, default=str, indent=2, ensure_ascii=False)

@app.get("/api/health", tags=["Status"])
def health_check():
    return {
        "status": "online",
        "service": "ORCHIVA Technologies — CITRUSFLOW Backend",
        "product": "CITRUSFLOW Monitor (1-Zone MVP Prototype)",
        "version": "1.1.0",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/api/telemetry/live", response_model=TelemetrySnapshot, tags=["Telemetry"])
def get_live_telemetry():
    """Returns telemetry data corresponding strictly to the CITRUSFLOW Monitor 1-zone pilot specifications."""
    return TelemetrySnapshot(
        timestamp=datetime.utcnow().isoformat(),
        citrusflow={
            "zone": "Secteur Pilote 01 — Agrumes (Cap Bon)",
            "pump_status": "Pompe en fonctionnement · Cycle d'arrosage en cours",
            "flow_rate_m3h": 18.2,
            "flow_nominal_range": "17.0 - 19.5 m³/h",
            "pressure_bar": 2.30,
            "pressure_status": "Conforme à la pression nominale des goutteurs",
            "volume_delivered_m3": 91.0,
            "volume_planned_m3": 110.0,
            "pump_energy_kwh_m3": 0.39,
            "history_bars": [
                {"time": "07:00", "flow": 18.0, "pct": 75},
                {"time": "08:00", "flow": 18.3, "pct": 82},
                {"time": "09:00", "flow": 18.2, "pct": 80},
                {"time": "10:00", "flow": 18.1, "pct": 79},
                {"time": "En cours", "flow": 18.2, "pct": 80}
            ]
        },
        soil={
            "station": "Station Sol N°1 (Sous goutteur représentatif)",
            "soil_type": "Limono-sableux Cap Bon",
            "depths": [
                {
                    "depth": "Profondeur 20 cm (Zone Superficielle)",
                    "moisture": "27.5% vol.",
                    "bar": 75,
                    "color": "#5DB58A",
                    "note": "Front d'humectation actif après 1h30 d'irrigation"
                },
                {
                    "depth": "Profondeur 40 cm (Cœur Racinaire Actif)",
                    "moisture": "23.0% vol.",
                    "bar": 60,
                    "color": "#1F7A57",
                    "note": "Eau disponible aux racines · Réserve utile reconstituée"
                }
            ],
            "agronomic_note": "Les données mesurées aux deux sondes indiquent que l'eau a atteint la zone active de 40 cm. Pour éviter le drainage profond sous 60 cm, le cycle programmé peut être clôturé à l'atteinte du volume cible de 110 m³."
        },
        hardware={
            "gateway": "Passerelle LoRaWAN Pilote (Banc d'essai)",
            "buffer_status": "Actif · Mémoire tampon flash 100% synchronisée",
            "sensor_inputs": "1 Débitmètre à impulsions + 1 Capteur de pression + 2 Stations sol 4 sondes",
            "pump_metering": "Surveillance tores de courant / temps de marche",
            "radio_link": "LoRaWAN EU868 MHz · Portée verger vérifiée"
        }
    )

@app.post("/api/pilot/apply", response_model=PilotApplicationResponse, status_code=status.HTTP_201_CREATED, tags=["Pilot Cohort"])
def submit_pilot_application(application: PilotApplication):
    """Receives and validates pilot assessment applications."""
    ref_id = f"ORCHIVA-CF-{datetime.utcnow().strftime('%Y%m')}-{uuid.uuid4().hex[:6].upper()}"
    app_record = application.dict()
    app_record["reference_id"] = ref_id
    save_application(app_record)

    return PilotApplicationResponse(
        success=True,
        reference_id=ref_id,
        message="Candidature enregistrée avec succès. Un ingénieur ORCHIVA vous contactera sous 48h.",
        data=application
    )

@app.get("/api/pilot/applications", tags=["Pilot Cohort"])
def list_pilot_applications():
    """Lists submitted applications for audit and follow-up."""
    if not APPLICATIONS_FILE.exists():
        return []
    with open(APPLICATIONS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

# Mount frontend dist if it exists
FRONTEND_DIST = Path(__file__).parent.parent / "frontend" / "dist"
if FRONTEND_DIST.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIST), html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
