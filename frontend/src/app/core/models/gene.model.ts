// gene.model.ts
export interface Gene {
  id: number;
  symbole: string;            // ex. "FBN1"
  nom: string;
  locus?: string;
}