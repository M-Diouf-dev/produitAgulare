import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulaire_ajout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './formulaire_ajout.html',
  styleUrl: './formulaire_ajout.css',
})
export class FormulaireAjout {
onSubmit() {
throw new Error('Method not implemented.');
}
}
