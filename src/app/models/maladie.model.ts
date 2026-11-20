// src/app/models/maladie.model.ts

export interface Maladie {
  id: number;
  orphaCode: string;          // exemple. "ORPHA:558"
  nom: string;
  synonymes: string[];
  description?: string;       // le "?" rend le champ optionnel
  prevalence?: string;
  ageApparition?: string;
  modeTransmission?: string;
}