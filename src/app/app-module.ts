import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersona } from './services/service.personas';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersona
  ],
  bootstrap: [App]
})
export class AppModule { }
