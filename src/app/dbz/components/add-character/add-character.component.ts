import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  //para realizar la agregacion al listado de personajes primero debemos de asegurarnos de emitir ese valor
  // con esto nos aseguramos de estar emitiendo
  @Output() //este onNewCharacter es solo un nombre puede ser cualquiera.
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  addCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character); // se agrega para emitir, despues de esto nos vamos al main_page
    this.character = { name: '', power: 0 };
  }
}
