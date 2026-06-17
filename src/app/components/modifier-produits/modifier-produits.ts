import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProduitService } from '../../services/produits';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-produits',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './modifier-produits.html',
  styleUrl: './modifier-produits.css',
})
export class ModifierProduits implements OnInit {
  categories = ["ordinateur", "mobile", "accessoire"];

  produitService = inject(ProduitService);
  routeur = inject(Router);
  route = inject(ActivatedRoute);
  produitAModifier: Produit | null = null;

  modifierProduit(): void {
    if (this.produitAModifier) {
      this.produitService.modifier(this.produitAModifier);
      this.routeur.navigate(['/']);  // ← redirige après modification
    }
  }

  ngOnInit(): void {
    const nouveauProduitId = this.route.snapshot.paramMap.get('id');
    const id = Number(nouveauProduitId);
    const produitAModifier = this.produitService.getProduitById(id);

    if (produitAModifier) {
      this.produitAModifier = { ...produitAModifier };
    } else {
      console.error("Produit non trouvé avec l'ID:", id);
      this.routeur.navigate(['/']);  // ← cohérent avec le reste
    }
  }
}