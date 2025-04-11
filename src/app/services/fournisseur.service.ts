import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../models/fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = 'http://localhost:8081/api/fournisseurs';

  constructor(private http: HttpClient) {}
// Get all fournisseurs
  getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }
    // Ajouter un fournisseur
    addFournisseur(fournisseur: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, fournisseur);
    }
  
    // Mettre à jour un fournisseur
    updateFournisseur(fournisseur: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${fournisseur.id}`, fournisseur);
    }
}
