import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keyword = '';

  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey)
      this.title = 'The Edward Web';
  }
  keywordReset() {
    this.keyword = '';
  }
}
