import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  meuNome: string = "Yan";
  codigoTurma: string = "ADS0301N";
  fotoUrl: string = "D:\avform\yangapp\src\assets\imgs";
}
