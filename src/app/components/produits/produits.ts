import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produits';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],  // ✅ RouterLink supprimé
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits implements OnInit {
  produitService = inject(ProduitService);
  router = inject(Router);

  ngOnInit(): void {
    this.produitService.getAllProduits().subscribe({
      next: (resp: Produit[]) => {
        this.produitService._produits.set(resp);
      },
      error: (err) => console.error(err),
    });
  }

  handleDelete(produit: Produit): void {
    let v = confirm("voulez vous supprimer ce message ?")
    if (v){
      this.produitService.deleteProduit(produit).subscribe({
        next: () => {
          this.produitService._produits.update((liste) => liste.filter((p) => p.id !== produit.id));
        },
        error: (err) => console.error(err),
      });
    }
  }

  handleModifier(produit: Produit): void {  // ✅ ajouté
    this.router.navigate(['/modifier', produit.id]);
  }

  handleDetails(produit: Produit): void {  // ✅ ajouté
    this.router.navigate(['/details', produit.id]);
  }
}
