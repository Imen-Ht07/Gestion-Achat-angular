import { Commande } from './commande';

export class LigneCommande{
  id?: number;
  produit!: string;
  quantite!: number;
  prixUnitaire!: number;
  commande?: Commande;
}
