import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-intro';
  imgUrl = 'assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com/';
  userName : string = ''
  onClick = (e : any) => {
    window.open(this.url, '_blank');
  }
  onChange = (e : any) => {
    this.userName = e.target.value;
  }
}
