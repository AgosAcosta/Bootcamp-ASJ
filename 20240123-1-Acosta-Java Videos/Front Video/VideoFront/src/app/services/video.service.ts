import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/videos';

  public getVideos(): Observable<any> {
    return this.http.get(this.url);
  }

  public getVideoById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public postVideo(video: any): Observable<any> {
    return this.http.post(this.url, video);
  }

  public deleteVideo(id: any): Observable<any> {
    if (id <= 0) {
      console.error('ID de tarea no válido.');
    }
    const url = `${this.url}/${id}`;
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

  public updateVideo(id: any, video: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, video);
  }

  public filtarNombre(nombre: String): Observable<any> {
    return this.http.get(`${this.url}/filtrar/${nombre}`);
  }

  public filtrarCategoria(categoria: String): Observable<any> {
    return this.http.get(`${this.url}/categoria/${categoria}`);
  }
}
