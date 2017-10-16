
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CadastroVeiculosPage } from './../pages/cadastro-veiculos/cadastro-veiculos';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [//paginas, componentes, pipes, diretivas
    CadastroVeiculosPage,
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode:'md',
        scrollAssist: false,
      autoFocusAssist: false

    })//MyApp é o componente de inicio da app (root component da app)
  ],
  bootstrap: [IonicApp],
  entryComponents: [//somente paginas
    CadastroVeiculosPage,
    MyApp,//componente raiz. Nao é uma pagina
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
