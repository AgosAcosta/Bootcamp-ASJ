import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private Url = 'http://localhost:8080/tareas';
  constructor(private http: HttpClient) {}

  public getAllTareas(): Observable<any> {
    return this.http.get(this.Url);
  }

  public postTareas(tareas: any): Observable<any> {
    return this.http.post(this.Url, tareas);
  }

  public updateTareas(id: number, tarea: any): Observable<any> {
    if (id <= 0) {
      console.error('ID de tarea no válido.');
    }
    const url = `${this.Url}/${id}`;
    return this.http.put(url, tarea, { responseType: 'text' }).pipe(
      catchError((response) => {
        console.log('Respuesta del servidor:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error al actualizar la tarea', error);
        return throwError('Error al actualizar la tarea');
      })
    );
  }

  public deleteTareas(id: any): Observable<any> {
    if (id <= 0) {
      console.error('ID de tarea no válido.');
    }
    const url = `${this.Url}/${id}`;
    return this.http.delete(url, { responseType: 'text' }).pipe(
      catchError((response) => {
        console.log('Respuesta del servidor:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error al actualizar la tarea', error);
        return throwError('Error al actualizar la tarea');
      })
    );
  }

  public finalizarTarea(tarea: {
    id: number;
    estado: string;
  }): Observable<any> {
    const nuevoEstado = { estado: 'Finalizado' };

    if (!tarea || tarea.id <= 0) {
      console.error('ID de tarea no válido.');
      return throwError('ID de tarea no válido.');
    }

    const url = `${this.Url}/${tarea.id}`;

    return this.http.put(url, nuevoEstado, { responseType: 'text' }).pipe(
      catchError((response) => {
        console.log('Respuesta del servidor:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error al actualizar la tarea', error);
        return throwError('Error al actualizar la tarea');
      })
    );
  }
}
