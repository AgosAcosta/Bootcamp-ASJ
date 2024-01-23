import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideosComponent } from './components/videoComponent/list-videos/list-videos.component';
import { FormVideoComponent } from './components/videoComponent/form-video/form-video.component';
import { DetailVideoComponent } from './components/videoComponent/detail-video/detail-video.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListVideosComponent },
      { path: 'new', component: FormVideoComponent },
      { path: ':id', component: DetailVideoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
