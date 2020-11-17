import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CentroCulturalSesionComponent } from './centro-cultural-sesion/centro-cultural-sesion.component';
import { CentrosCulturalesComponent } from './centros-culturales/centros-culturales.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MapaComponent } from './mapa/mapa.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioSesionComponent } from './usuario-sesion/usuario-sesion.component';
import { VideosEscenariosComponent } from './videos-escenarios/videos-escenarios.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full',
  // },
  {
    path: 'centrosCulturales',
    component: CentrosCulturalesComponent,
  },
  {
    path: 'mapa',
    component: MapaComponent,
  },
  {
    path: 'videosEscenarios',
    component: VideosEscenariosComponent,
  },
  {
    path:'merchandising',
    component: MerchandisingComponent
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
  },
  {
    path: 'informacion',
    component: InformacionComponent,
  },
  {
    path: 'inicioSesionUsuario',
    component: UsuarioSesionComponent,
  },
  {
    path: 'inicioSesionCentroCultural',
    component: CentroCulturalSesionComponent,
  },
  {
    path: 'registroUsuario',
    component: UsuarioRegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
