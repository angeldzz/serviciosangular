import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersona } from './services/service.personas';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { ServicePlantilla } from './services/service.plantilla';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { FormsModule } from '@angular/forms';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple.component/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    NavbarComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersona,
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [App]
})
export class AppModule { }
