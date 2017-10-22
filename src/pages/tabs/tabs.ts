import { AtendimentoPage } from './../atendimento/atendimento';
import { ServicosPage } from './../servicos/servicos';
import { AgendamentoPage } from './../agendamento/agendamento';


import { PerfilPage } from './../perfil/perfil';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AtendimentoPage;
  tab2Root = ServicosPage;
  tab3Root = PerfilPage;


  constructor(public navCtrl: NavController) {}


@ViewChild('myTabs') tabRef: Tabs;

ionViewDidEnter() {
  this.tabRef.select(1);
 }

}
