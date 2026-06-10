import { Routes } from '@angular/router';
import { FormulaireAjout } from './components/formulaire_ajout/formulaire_ajout';
import { Produits } from './components/produits/produits';
import { ProduitDetails } from './components/produit-details/produit-details';
import { ModifierProduits } from './components/modifier-produits/modifier-produits';

export const routes: Routes = [
    {path:'',redirectTo:'produits',pathMatch:'full'},
    {path:'produits',component:Produits},
    {path:'ajouter',component:FormulaireAjout}, 
    {path:'details/:id',component:ProduitDetails},
    {path:'modifier/:id',component:ModifierProduits}
];



