import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'IronMan';
  public age: number = 45;

  //devuelve el nombre en mayusculas
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  //concatenacion, aca tambien si coloco private getHeroDescription este me va afuncionar solo dentro de esta clase si lo muestro en el html, me dara error

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

  // Propiedad calculada para determinar la visibilidad del botón Reset
  get showResetButton(): boolean {
    return this.name === 'Spiderman' || this.age === 25;
  }

}
