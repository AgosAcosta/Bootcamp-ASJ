import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoService } from '../../../services/video.service';
import { VideoInterface } from '../../../Interfaces/VideoInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrl: './form-video.component.css',
})
export class FormVideoComponent {
  video: VideoInterface = {
    url: '',
    nombre: '',
    categoria: '',
    descripcion: '',
    cantidadVistas: 0,
    cantidadMeGusta: 0,
    cantidadNoMeGusta: 0,
  };

  constructor(private videoService: VideoService, private router: Router) {}

  createNewVideo(form: NgForm) {
    if (!form.valid) {
      console.log('Revisar los datos ingresados');
      return;
    } else {
      this.videoService.postVideo(this.video).subscribe((data) => {
        console.log('POST', this.video);
        this.router.navigate(['']);
      });
    }
  }
}
