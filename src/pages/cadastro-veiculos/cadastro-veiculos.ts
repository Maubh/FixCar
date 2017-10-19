import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the CadastroVeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-veiculos',
  templateUrl: 'cadastro-veiculos.html',
})
export class CadastroVeiculosPage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroVeiculosPage');
}*/

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      this.toast.create({
        message: 'Bem vindo ao FixCar! ' + `${data.email}`,
        duration: 3000
      }).present();
    }
    else {
      this.toast.create({
        message: 'Usuário ou Senha inválidos, por favor verifique.',
        duration: 3000
    })
  }
}
)}
}
