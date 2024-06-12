import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button class="btn btn-primary mx-2" (click)="incrementarBy(-1)">-</button>
    <button class="btn btn-warning mx-2" (click)="reset()">Reset</button>
    <button class="btn btn-info mx-2" (click)="incrementarBy(1)">+</button>
  `,
})
export class CounterComponent {
  constructor() {}
  title = 'Login';
  public counter: number = 10;

  incrementarBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
