import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //aca se utiliza el constructor para aplicar los servicios
  //cambiamos el servicio a que sea privado
  constructor(private dbzService: DbzService) {}

  //aca podemos crear getters and setter
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
