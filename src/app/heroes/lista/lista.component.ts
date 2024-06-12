import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];


  public deleteHero?: string;
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }

  public addHero?: string;

  agregarHeroe(): void {
    const newHero = 'Capitán América';
    this.heroNames.push(newHero);
    this.addHero = newHero;
  }
}
