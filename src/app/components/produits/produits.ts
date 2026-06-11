import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ProduitService } from '../../services/produits';

@Component({
  selector: 'app-produits',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  // l'injecter pour acceder au services
  produitService = inject(ProduitService);
  route= inject(Router);

  // le redonly dans service
  //pour utiliser produits ailleur on met des () ex: produits()
  produits = this.produitService.produits;
  viewDetails(_t18: Produit) {
    throw new Error('Method not implemented.');
  }
  update(arg0: any) {
    throw new Error('Method not implemented.');
  }







  // this.produits = [
  //   {
  //     id: 1,
  //     nom: "Dell",
  //     prix: 140000,
  //     stock: 10,
  //     actif: true,
  //     categorie: this.categories[0],
  //     description: "Avec des Dells de haut qualite"
  //   },
  //   {
  //     id: 2,
  //     nom: "sumsung",
  //     prix: 60000,
  //     stock: 5,
  //     actif: true,
  //     categorie: this.categories[1],
  //     description: "bienvenue chez samsung pro"
  //   },
  //   {
  //     id: 3,
  //     nom: "montre",
  //     prix: 30000,
  //     stock: 0,
  //     actif: false,
  //     categorie: this.categories[2],
  //     description: "montre de luxe chez Ndeye Coumba"
  //   }

  // ]


  suprimer(id: number): void {
    let c = confirm("voulez-vous supprimer ce produit?")
    if (c) {
      this.produitService.supprimer(id);
    }
  }
  modifierProduit(id:number): void {
    this.route.navigate(['/modifier/:id']);
  }
}


