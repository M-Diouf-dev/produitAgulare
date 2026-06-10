
export interface Produit{
    id : number;
    nom : string,
    prix : number;
    stock : number;
    actif : boolean;
    categorie : string;
    description? : string;
    
}