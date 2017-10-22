import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { CadastroVeiculosPage } from './../cadastro-veiculos/cadastro-veiculos';

/**
 * Generated class for the CadastroClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-clientes',
  templateUrl: 'cadastro-clientes.html',
})
export class CadastroClientesPage {

  pushPage: any;
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      this.pushPage = HomePage;
  }

  register(user: User){
    try {
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    this.navCtrl.push(CadastroVeiculosPage);
  }
  catch (e) {
    console.error(e);
  }
}
}
