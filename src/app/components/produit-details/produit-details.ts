import { Component, inject, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produits';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../models/produit';
import { ModifierProduits } from '../modifier-produits/modifier-produits';

@Component({
  selector: 'app-produit-details',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './produit-details.html',
  styleUrl: './produit-details.css',
})
export class ProduitDetails implements OnInit {

  produitservice = inject(ProduitService)
  routeur = inject(Router)
  route = inject(ActivatedRoute)
  detailProduit : Produit | undefined;

  ngOnInit(): void {
    const details = this.route.snapshot.paramMap.get('id')
    const detailId = Number(details)
    if (detailId){
      this.detailProduit = this.produitservice.getProduitById(detailId)
      if(!this.detailProduit){
        this.routeur.navigate(['/'])
      }
    }
    else {
      console.log("le produit de cet Id n'existe pas", detailId)
      this.routeur.navigate(['/'])
    }
    
  }
  modifierProduit(id:number) :void{
    this.routeur.navigate(['modifier',id])
  }
  
}


