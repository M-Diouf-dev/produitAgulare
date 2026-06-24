import { inject, Injectable, signal } from '@angular/core';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {

  private _http = inject(HttpClient);
  _produits = signal<Produit[]>([]);

  private apiUrl = 'http://localhost:8080/produits';

  getAllProduits(): Observable<Produit[]> {
    return this._http.get<Produit[]>(this.apiUrl);
  }

  deleteProduit(produit: Produit): Observable<any> {
    return this._http.delete(`${this.apiUrl}/supprimer/${produit.id}`);
  }

  ajouterProduits(produit: Omit<Produit, 'id'>): void {
    this._http.post<Produit>(`${this.apiUrl}/creer`, produit).subscribe({
      next: (nouveauProduit) => {
        this._produits.update(liste => [...liste, nouveauProduit]);
      },
      error: (err) => console.error('erreur ajout', err)
    });
  }
}
