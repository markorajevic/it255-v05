import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public videos = [
    {
      title: "Video - 1",
      description: "Lorem ipsum, lorem ipsum",
      link: "https://www.youtube.com/embed/ltVOXz4mxOo"
    },
    {
      title: "Video - 2",
      description: "Lorem ipsum, lorem ipsum",
      link: "https://www.youtube.com/embed/pZuJKQ6uzHE"
    },
    {
      title: "Video - 3",
      description: "Lorem ipsum, lorem ipsum",
      link: "https://www.youtube.com/embed/ltVOXz4mxOo"
    }
  ];
}
