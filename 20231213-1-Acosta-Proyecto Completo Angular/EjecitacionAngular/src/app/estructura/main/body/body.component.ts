import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  input = '';
  tareas: { nombre: string; completa: boolean }[] = [];

  agregarLista() {
    this.tareas.push({ nombre: this.input, completa: false });
    this.input = '';
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
  TareasPendientes() {
    this.tareas = this.tareas.filter((tarea) => !tarea.completa);
  }
  TareasCompletas() {
    this.tareas = this.tareas.filter((tarea) => tarea.completa);
  }
  TareasEliminadas() {}
}
