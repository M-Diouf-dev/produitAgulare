import { Component, signal } from '@angular/core';
import { FormulaireAjout } from "./components/formulaire_ajout/formulaire_ajout";
import { NavBar } from "./components/nav-bar/nav-bar";

import { RouterOutlet } from "@angular/router";
import { Produits } from './components/produits/produits';

@Component({
  selector: 'app-root',
  imports: [FormulaireAjout, NavBar, Produits ,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-produit');
}
