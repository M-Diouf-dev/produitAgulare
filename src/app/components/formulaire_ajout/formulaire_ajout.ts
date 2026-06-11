import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProduitService } from '../../services/produits';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire_ajout',
  imports: [RouterLink, RouterOutlet,FormsModule],
  templateUrl: './formulaire_ajout.html',
  styleUrl: './formulaire_ajout.css',
})
export class FormulaireAjout {
  categories = ["ordinateur", "mobile", "accessoire"];
  route = inject(Router);
  produitService = inject(ProduitService);
  nouveauProduit: Omit<Produit, 'id'> = {
    nom: '',
    prix: 0,
    stock: 0,
    actif: true,
    categorie: '',
    description: ''
  };
  ajouterProduit(): void {
    this.produitService.ajouter(this.nouveauProduit);
    console.log("Produit ajouté:", this.nouveauProduit);
    this.route.navigate(["/produits"]);

  }
  
}
