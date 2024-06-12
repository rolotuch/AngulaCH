import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './componentes/counter/counter.component';



@NgModule({
  declarations: [
    CounterComponent
  ],
  //si no lo exportamos no lo podremos ver fuera de la carpeta counter principal
  // si lo queremosutilizar fuera debemos de exportar
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
