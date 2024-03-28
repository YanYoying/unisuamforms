import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  meuNome: string = "Yan";
  matricula: string ="19200450";
  codigoTurma: string = "ADS0301N";
  fotoUrl: string = "././assets/imgs/yang.jpg";
}
