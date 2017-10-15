import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroVeiculosPage } from './cadastro-veiculos';

@NgModule({
  declarations: [
    CadastroVeiculosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroVeiculosPage),
  ],
})
export class CadastroVeiculosPageModule {}
