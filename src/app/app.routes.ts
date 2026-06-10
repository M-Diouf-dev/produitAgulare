import { Routes } from '@angular/router';
import { FormulaireAjout } from './components/formulaire_ajout/formulaire_ajout';
import { Produits } from './components/produits/produits';

export const routes: Routes = [
    {path:'',redirectTo:'produits',pathMatch:'full'},
    {path:'produits',component:Produits},
    {path:'produits/ajouter',component:FormulaireAjout}, 
];



