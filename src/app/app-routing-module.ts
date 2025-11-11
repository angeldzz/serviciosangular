import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple.component/plantillafuncionmultiple.component';

const routes: Routes = [
  {path:"personas", component:PersonasApiComponent},
  {path:"personaStandalone", component:PersonasstandaloneComponent},
  {path:"coches", component:CochesComponent},
  {path:"plantilla", component:PlantillafuncionsimpleComponent},
  {path:"plantillaMultiple", component:PlantillafuncionmultipleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
