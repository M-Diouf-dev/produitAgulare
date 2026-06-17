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
export class Produits implements OnInit {

  // l'injecter pour acceder au services
  produitService = inject(ProduitService);
  route = inject(Router);
  produits =this.produitService._produits;
  ngOnInit(): void {
    this.produitService.getAllProduits();
  }
}