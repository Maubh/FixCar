import { CadastroVeiculosPage } from './../cadastro-veiculos/cadastro-veiculos';
import { CadastroClientesPage } from './../cadastro-clientes/cadastro-clientes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../models/user";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user= {} as User;

  constructor(public navCtrl: NavController) {

  }

  onLogin(): void{
    this.navCtrl.push(CadastroVeiculosPage);

  }

  onRegister(): void{
    this.navCtrl.push(CadastroClientesPage);

  }
}
