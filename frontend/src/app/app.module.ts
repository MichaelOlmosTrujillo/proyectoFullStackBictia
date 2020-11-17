import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CentrosCulturalesComponent } from './centros-culturales/centros-culturales.component';
import { MapaComponent } from './mapa/mapa.component';
import { VideosEscenariosComponent } from './videos-escenarios/videos-escenarios.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { UsuarioSesionComponent } from './usuario-sesion/usuario-sesion.component';
import { CentroCulturalSesionComponent } from './centro-cultural-sesion/centro-cultural-sesion.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { FooterComponent } from './footer/footer.component';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';
import { MostrarTodosLosEventosComponent } from './eventos/mostrar-todos-los-eventos/mostrar-todos-los-eventos.component';
import { ListaTodosLosEventosComponent } from './lista-todos-los-eventos/lista-todos-los-eventos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CentrosCulturalesComponent,
    MapaComponent,
    VideosEscenariosComponent,
    MerchandisingComponent,
    CalendarioComponent,
    InformacionComponent,
    UsuarioSesionComponent,
    CentroCulturalSesionComponent,
    UsuarioRegistroComponent,
    FooterComponent,
    CrearEventoComponent,
    ListaEventosComponent,
    MostrarTodosLosEventosComponent,
    ListaTodosLosEventosComponent,
    CarruselComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
