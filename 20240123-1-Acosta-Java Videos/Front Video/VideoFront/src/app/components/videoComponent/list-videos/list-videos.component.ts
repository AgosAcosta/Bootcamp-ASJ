import { Component, OnInit } from '@angular/core';
import { VideoInterface } from '../../../Interfaces/VideoInterface';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrl: './list-videos.component.css',
})
export class ListVideosComponent implements OnInit {
  videos: VideoInterface[] = [];
  videosFiltrados: VideoInterface[] = [];
  video: VideoInterface = {
    url: '',
    nombre: '',
    categoria: '',
    descripcion: '',
    cantidadVistas: 0,
    cantidadMeGusta: 0,
    cantidadNoMeGusta: 0,
  };
  buscar = '';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista() {
    this.videoService.getVideos().subscribe((videos) => {
      this.videos = videos;

      console.log('Carga Videos', videos);
    });
  }

  deleteVideo(id: number | undefined) {
    if (id === undefined) {
      console.error('ID de video no válido.');
      return;
    }

    const confirmacion = window.confirm(
      `¿Estás seguro de eliminar el video ${this.video.nombre}?`
    );
    if (confirmacion) {
      this.videoService.deleteVideo(id).subscribe(() => {
        this.videos = this.videos.filter((video) => video.id !== id);
        console.log('Borrado');
        this.cargarLista();
      });
    }
  }

  filtarNombre(buscar: String) {
    this.videoService.filtarNombre(buscar).subscribe((data) => {
      this.videos = data;
    });
  }

  filtrarPorCategoria(categoria: String) {
    this.videoService.filtrarCategoria(categoria).subscribe(() => {
      this.videos = this.videos.filter(
        (video) => video.categoria === categoria
      );
    });
  }
  obtenerCategorias(): string[] {
    const categoriasUnicas = [
      ...new Set(this.videos.map((video) => video.categoria)),
    ];
    return categoriasUnicas;
  }
}
