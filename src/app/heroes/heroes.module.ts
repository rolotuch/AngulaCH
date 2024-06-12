import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroComponent, ListaComponent],
  exports: [HeroComponent, ListaComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
