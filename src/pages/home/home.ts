import { TabsPage } from './../tabs/tabs';
import { CadastroVeiculosPage } from './../cadastro-veiculos/cadastro-veiculos';
import { CadastroClientesPage } from './../cadastro-clientes/cadastro-clientes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user= {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController) {

  }

  async onLogin(user: User){
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if (result){
      this.navCtrl.setRoot(TabsPage);
  }
}
  catch(e){
    console.error(e);
  }
  }

  onRegister(): void{
    this.navCtrl.push(CadastroClientesPage);

  }
}
