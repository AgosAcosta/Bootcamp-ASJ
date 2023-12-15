import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './estructura/main/body/to-do-list/to-do-list.component';
import { FormLosSimpsonsComponent } from './estructura/main/body/form-los-simpsons/form-los-simpsons.component';

const routes: Routes = [
  { path: 'To-Do-List', component: ToDoListComponent },
  { path: 'Formulario-Los-Simpson', component: FormLosSimpsonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
