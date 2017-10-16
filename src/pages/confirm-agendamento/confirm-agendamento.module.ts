import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmAgendamentoPage } from './confirm-agendamento';

@NgModule({
  declarations: [
    ConfirmAgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmAgendamentoPage),
  ],
})
export class ConfirmAgendamentoPageModule {}
