import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';

const routes: Routes = [
  {path:"personas", component:PersonasApiComponent},
  {path:"personaStandalone", component:PersonasstandaloneComponent},
  {path:"coches", component:CochesComponent},
  {path:"plantilla", component:PlantillafuncionsimpleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
