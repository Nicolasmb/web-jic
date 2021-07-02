// El NgModule permite definir que es lo que maneja el módulo.
// Se importa de la carpeta Angular.
import { NgModule } from '@angular/core';
// Routes: Representa una configuración de ruta para el Router service.
// RouterModule: Agrega directivas y proveedores para la navegación en la aplicación 
// entre las vistas definidas en una aplicación. 
import { Routes, RouterModule } from '@angular/router'

// COMPONENTES PERSONALES
import { HomePageComponent } from './pages/home-page/home-page.component';

// Reglas de ruteo: se encargan de mostrar determinados componente para determinadas  
// URL que se escriban en la barra del navegador.
const routes: Routes = [
  { path: '', component: HomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
