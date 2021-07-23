// El NgModule permite definir que es lo que maneja el módulo.
// Se importa de la carpeta Angular.
import { NgModule } from '@angular/core';
// Routes: Representa una configuración de ruta para el Router service.
// RouterModule: Agrega directivas y proveedores para la navegación en la aplicación 
// entre las vistas definidas en una aplicación. 
import { Routes, RouterModule } from '@angular/router'

// COMPONENTES PERSONALES
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProyectoLagunaComponent } from './pages/proyecto-laguna/proyecto-laguna.component';
import { ProyectoPadreArietaComponent } from './pages/proyecto-padre-arieta/proyecto-padre-arieta.component';
import { ProyectoJujuyComponent } from './pages/proyecto-jujuy/proyecto-jujuy.component';
import { ProyectoArietaComponent } from './pages/proyecto-arieta/proyecto-arieta.component';
import { ProyectoTerravistaComponent } from './pages/proyecto-terravista/proyecto-terravista.component';

// Reglas de ruteo: se encargan de mostrar determinados componente para determinadas  
// URL que se escriban en la barra del navegador.
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'proyecto-laguna', component: ProyectoLagunaComponent },
  { path: 'proyecto-padre-arieta', component: ProyectoPadreArietaComponent },
  { path: 'proyecto-jujuy', component: ProyectoJujuyComponent },
  { path: 'proyecto-arieta', component: ProyectoArietaComponent },
  { path: 'proyecto-terravista', component: ProyectoTerravistaComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
