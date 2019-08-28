import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video';


@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss']
})
export class VideoBoxComponent implements OnInit {
  
  @Output() videoToDelete: EventEmitter<Video>;
  @Output() updateVideo: EventEmitter<Video>;
  @Input() video: any;
  public link: any;

  constructor(private _sanitizer: DomSanitizer) {
    this.videoToDelete = new EventEmitter();
    this.updateVideo = new EventEmitter();
  }

  ngOnInit() {
    this.embedUrl();
  }

  public embedUrl() {
    this.link =  this._sanitizer.bypassSecurityTrustResourceUrl(this.video.link);
  }

  public deleteProduct(): void {
    this.videoToDelete.emit(this.video);
  }

  public changeContent(): void {
    this.updateVideo.emit(this.video);
  }

}
