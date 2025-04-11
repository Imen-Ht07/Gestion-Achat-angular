import { Fournisseur } from './fournisseur';

export class Historique{
  id?: number;
  date!: string; // Format ISO (ex: '2025-04-11')
  montant!: number;
  description!: string;
  fournisseur!: Fournisseur;
}
