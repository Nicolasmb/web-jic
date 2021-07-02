import { NgModule } from '@angular/core';
// El BrowserModule permite que la aplicación corrar en los navegadores.
// Se importa de la carpeta Angular.
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  // Con el metadato "bootstrap" (arranque) se define el componente raíz que Angular
  // creará e insertará en la página web de host index.html.
  // Puede traducirse por «arranque» o «inicio», almacena una matriz con los nombres
  // de los componentes que tienen que cargarse cuando se inicia el módulo.
  bootstrap: [AppComponent]
})
export class AppModule { }
