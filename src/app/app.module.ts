import { AtendimentoPage } from './../pages/atendimento/atendimento';
import { IntroPage } from './../pages/intro/intro';
//import { Firebase } from '@ionic-native/firebase'; **
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgendamentoPage } from './../pages/agendamento/agendamento';
import { BuscarOficinasPage } from './../pages/buscar-oficinas/buscar-oficinas';
import { CadastroClientesPage } from './../pages/cadastro-clientes/cadastro-clientes';
import { CadastroVeiculosPage } from './../pages/cadastro-veiculos/cadastro-veiculos';
import { ConcludeAgendamentoPage } from './../pages/conclude-agendamento/conclude-agendamento';
import { ConfirmAgendamentoPage } from './../pages/confirm-agendamento/confirm-agendamento';
import { HomePage } from './../pages/home/home';
import { MyApp } from './app.component';
import { PerfilPage } from './../pages/perfil/perfil';
import { ServicosPage } from './../pages/servicos/servicos';
import { TabsPage } from './../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG} from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [//paginas, componentes, pipes, diretivas
    
    MyApp,
    HomePage,
    CadastroClientesPage,
    CadastroVeiculosPage,
    AgendamentoPage,
    BuscarOficinasPage,
    ConcludeAgendamentoPage,
    ConfirmAgendamentoPage,
    PerfilPage,
    ServicosPage,
    TabsPage,
    IntroPage,
    AtendimentoPage

  ],
   imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, {
        mode:'md',
    }
  )
   
  //MyApp é o componente de inicio da app (root component da app)
  ],
  bootstrap: [IonicApp],
  entryComponents: [//somente paginas
    MyApp,
    HomePage,
    CadastroClientesPage,
    CadastroVeiculosPage,
    AgendamentoPage,
    BuscarOficinasPage,
    ConcludeAgendamentoPage,
    ConfirmAgendamentoPage,
    PerfilPage,
    ServicosPage,
    TabsPage,
    IntroPage,
    AtendimentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
