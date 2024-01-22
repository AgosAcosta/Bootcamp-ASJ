import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './service/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent implements OnInit {
  tareas: Tareas[] = [];
  tarea: Tareas = {
    nombre: '',
    descripcion: '',
    estado: '',
  };

  isUpdate: boolean = false;

  constructor(private toDoListService: ToDoListService) {}

  ngOnInit(): void {
    this.todasLasTareas();
  }

  todasLasTareas() {
    this.toDoListService.getAllTareas().subscribe((data) => {
      this.tareas = data;
    });
  }

  Agregar() {
    if (!this.isUpdate) {
      if (this.tarea.nombre != '' && this.tarea.descripcion != '') {
        this.tarea.estado = 'Pendiente';
        this.toDoListService.postTareas(this.tarea).subscribe((response) => {
          console.log('Agregada', response);
          alert('Se agrego con exito!');
          this.todasLasTareas();
          this.limpiar();
        });
      } else {
        console.log('Debe Completar los campos');
        alert('Revise los datos');
      }
    } else {
      if (this.tarea && typeof this.tarea.id === 'number') {
        this.toDoListService
          .updateTareas(this.tarea.id, this.tarea)
          .subscribe((tareaActualizada) => {
            console.log('Actualizado');
            alert('Actualizada con exito!');
            this.todasLasTareas();
            this.limpiar();
            this.isUpdate = false;
          });
      } else {
        console.error('La tarea no tiene un ID válido');
      }
    }
  }

  editarTarea(tarea: any): void {
    this.tarea = { ...tarea };
    this.isUpdate = true;
  }

  eliminarTarea(tarea: any) {
    this.tarea.estado = 'Eliminado';
    this.toDoListService.deleteTareas(tarea.id).subscribe((borrar) => {
      console.log('Borrado');
      this.todasLasTareas();
      alert('Se borro la tarea id#' + tarea.id);
    });
  }

  cargarTareasPorEstado(arg0: string) {
    throw new Error('Method not implemented.');
  }

  finalizarTarea(tarea: any): void {
    if (tarea && tarea.id) {
      const tareaActualizada = { id: tarea.id, estado: 'Finalizado' };

      this.toDoListService.finalizarTarea(tareaActualizada).subscribe(() => {
        console.log('Tarea finalizada exitosamente');
        this.todasLasTareas();
        this.limpiar();
      });
    }
  }

  limpiar() {
    this.tarea = {
      nombre: '',
      descripcion: '',
      estado: '',
    };
  }
}

interface Tareas {
  id?: number;
  nombre: string;
  descripcion: string;
  estado: string;
}
