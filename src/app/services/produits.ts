import { inject, Injectable, signal } from '@angular/core';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
    private _http = inject(HttpClient);
    _produits = signal<Produit[]>([]);

    private apiUrl ="http://localhost:3030/produits";

    getAllProduits ():void{
        this._http.get<Produit[]>(this.apiUrl)
        .subscribe(data=>{
            this._produits.set(data)
        });
    }


}
