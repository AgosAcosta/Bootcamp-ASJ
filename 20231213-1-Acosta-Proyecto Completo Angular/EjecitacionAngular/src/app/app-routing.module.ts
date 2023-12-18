import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './estructura/main/body/to-do-list/to-do-list.component';
import { FormLosSimpsonsComponent } from './estructura/main/body/form-los-simpsons/form-los-simpsons.component';
import { ApiRickAndMortyComponent } from './estructura/main/body/api-rick-and-morty/api-rick-and-morty.component';
import { PersonajeComponent } from './estructura/main/body/api-rick-and-morty/personaje/personaje.component';

const routes: Routes = [
  { path: 'To-Do-List', component: ToDoListComponent },
  { path: 'Form-The-Simpson', component: FormLosSimpsonsComponent },
  {
    path: 'List-Rick-and-Morty',
    children: [
      { path: '', component: ApiRickAndMortyComponent },
      { path: ':id', component: PersonajeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
