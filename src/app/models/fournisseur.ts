import { Commande } from './commande';
import { Historique} from './historique';

export class Fournisseur {
  id?: number;
  nom!: string;
  contact!: string;
  qualiteService?: string;
  note?: number; // Entre 0 et 5
  commandes?: Commande[];
  historiques?: Historique[];
}