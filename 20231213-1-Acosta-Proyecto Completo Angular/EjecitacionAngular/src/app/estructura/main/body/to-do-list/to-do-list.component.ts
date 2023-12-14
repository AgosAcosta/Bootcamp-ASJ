import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  input = '';
  tareas: { nombre: string; completa: boolean }[] = [];


  agregarLista() {
    this.tareas.push({ nombre: this.input, completa: false });
    this.input = '';
  }

  eliminarTarea(index: number) {
    const eliminado = this.tareas.splice(index, 1);
  }
  TareasPendientes() {
    this.tareas = this.tareas.filter((tarea) => !tarea.completa);
  }
  TareasCompletas() {
    this.tareas = this.tareas.filter((tarea) => tarea.completa);
  }
  TareasEliminadas() {
    //this.tareas = this.tareas.filter((tarea)=> this.eliminarTarea)
  }
}
