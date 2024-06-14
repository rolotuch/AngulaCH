import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  //VAMOS A EMITIR EL INDEX
  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number) {
  //   this.onDelete.emit(index);
  // // }

  onDeleteCharacterById(id?: string): void { //le colocamos ? opcional al id para que no de problemas
    if(!id) return;
    this.onDelete.emit(id);
  }
}
