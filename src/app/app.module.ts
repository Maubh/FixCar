
//import { Firebase } from '@ionic-native/firebase'; **
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CadastroVeiculosPage } from './../pages/cadastro-veiculos/cadastro-veiculos';
import { CadastroClientesPage } from './../pages/cadastro-clientes/cadastro-clientes';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG} from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  declarations: [//paginas, componentes, pipes, diretivas
    CadastroVeiculosPage,
    MyApp,
    HomePage,
    CadastroClientesPage
  ],
   imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, {
        mode:'md',
        scrollAssist: false,
      autoFocusAssist: false
    }
  )
   
  //MyApp é o componente de inicio da app (root component da app)
  ],
  bootstrap: [IonicApp],
  entryComponents: [//somente paginas
    CadastroVeiculosPage,
    MyApp,//componente raiz. Nao é uma pagina
    HomePage,
    CadastroClientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
