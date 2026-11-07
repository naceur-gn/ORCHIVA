from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime

class PilotApplication(BaseModel):
    full_name: str = Field(..., description="Nom et prénom du responsable")
    farm_name: Optional[str] = Field(None, description="Nom de l'exploitation ou entreprise")
    phone: str = Field(..., description="Numéro de téléphone / WhatsApp")
    email: str = Field(..., description="Adresse courriel")
    location: str = Field("Beni Khaled", description="Délégation ou gouvernorat")
    surface_ha: Optional[float] = Field(None, ge=0, description="Surface arborée en hectares")
    interest: str = Field("Pilot CITRUSFLOW Monitor", description="Objet de la candidature")
    message: Optional[str] = Field(None, description="Précisions sur les cultures ou le réseau")
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

class PilotApplicationResponse(BaseModel):
    success: bool
    reference_id: str
    message: str
    data: PilotApplication

class TelemetrySnapshot(BaseModel):
    timestamp: str
    citrusflow: Dict[str, Any]
    soil: Dict[str, Any]
    hardware: Dict[str, Any]
