import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { VideoInterface } from '../../../Interfaces/VideoInterface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrl: './detail-video.component.css',
})
export class DetailVideoComponent implements OnInit {
  video: VideoInterface | undefined;
  videoId: number = -1;

  flagLike = false;
  flagDislike = false;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id != undefined) {
        this.videoService.getVideoById(id)!.subscribe((data) => {
          this.video = data;
        });
      }
    });
  }

  getSafeUrl(): SafeResourceUrl | string {
    if (this.video && this.video.url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }
    return '';
  }
  like(id: number | undefined): void {
    if (id !== undefined && this.video && !this.flagLike) {
      this.video.cantidadMeGusta++;
      this.flagLike = true;
      if (this.flagDislike) {
        this.video.cantidadNoMeGusta--;
        this.flagDislike = false;
      }
      this.updateVideo(id, this.video);
    }
  }

  dislike(id: number | undefined): void {
    if (id !== undefined && this.video && !this.flagDislike) {
      this.video.cantidadNoMeGusta++;
      this.flagDislike = true;
      if (this.flagLike) {
        this.video.cantidadMeGusta--;
        this.flagLike = false;
      }
      this.updateVideo(id, this.video);
    }
  }

  private updateVideo(id: number, updatedVideo: any): void {
    this.videoService.updateVideo(id, updatedVideo).subscribe(
      () => {
        console.log('Funciona los mg');
      },
      (error) => {
        console.error('Error al actualizar el video', error);
      }
    );
  }
}
