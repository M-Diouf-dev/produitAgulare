import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modifier-produits',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './modifier-produits.html',
  styleUrl: './modifier-produits.css',
})
export class ModifierProduits {}
