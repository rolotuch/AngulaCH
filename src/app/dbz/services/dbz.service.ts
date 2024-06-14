import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})


export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 4500,
    },
    {
      id: uuid(),
      name: 'Krinlin',
      power: 3200,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }; //los tres puntos indica que tome todo los parametros que vengan en el objeto character
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
