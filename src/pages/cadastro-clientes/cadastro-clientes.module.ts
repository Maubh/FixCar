import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClientesPage } from './cadastro-clientes';

@NgModule({
  declarations: [
    CadastroClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroClientesPage),
  ],
})
export class CadastroClientesPageModule {}
