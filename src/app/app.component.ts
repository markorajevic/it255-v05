import { Component } from '@angular/core';
import { Video } from './models/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public videos: Video[] = [];
  private _links: string[] = [
    'YiUQE5bJKFU',
    'B32yjbCSVpU',
    'yG0oBPtyNb0',
    'f7McpVPlidc',
    'qhZULM69DIw',
    'wvUQcnfwUUM'
  ];


  constructor(){
    for(let i = 0; i < 6; i++) {
      this.videos.push(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[i]))
    }
  }

  private _generateString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  public deleteVideo(video: Video) {
    this.videos = this.videos.filter(item => { 
      return item.title !== video.title
    })
  }
  public updateVideo(video: Video) {
    let index = this.videos.findIndex(i => i.title === video.title);
    this.videos[index].title = this._generateString(6);
  }

  
}
