import { Fournisseur } from './fournisseur';
import { LigneCommande } from './ligne-commande';
import { StatutCommande } from '../enum/statutCommande.enum';

export interface Commande {
  id?: number;
  fournisseur: Fournisseur;
  date: string; // format ISO string (ex: '2025-04-11')
  statut: StatutCommande;
  montant: number;
  lignes: LigneCommande[];
}