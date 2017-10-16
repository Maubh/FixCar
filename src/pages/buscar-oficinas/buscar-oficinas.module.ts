import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarOficinasPage } from './buscar-oficinas';

@NgModule({
  declarations: [
    BuscarOficinasPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarOficinasPage),
  ],
})
export class BuscarOficinasPageModule {}
