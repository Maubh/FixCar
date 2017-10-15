import { CadastroVeiculosPage } from './../cadastro-veiculos/cadastro-veiculos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onEntrar(): void{
    this.navCtrl.push(CadastroVeiculosPage);

  }

}
