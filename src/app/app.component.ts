import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  //borramos todo lo necesario porque ya tenemos esto en un componente especifico
  // counter : number = 10;

  // incrementarBy(value: number):void {
  //   this.counter += value;
  // }

  // reset():void {
  //   this.counter = 10;
  // }

}
