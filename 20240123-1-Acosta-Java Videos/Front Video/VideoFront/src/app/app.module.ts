import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVideosComponent } from './components/videoComponent/list-videos/list-videos.component';
import { FormVideoComponent } from './components/videoComponent/form-video/form-video.component';
import { DetailVideoComponent } from './components/videoComponent/detail-video/detail-video.component';
import { UrlPipe } from './pipes/url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    FormVideoComponent,
    DetailVideoComponent,
    UrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
