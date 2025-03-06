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
  onClick = (e : any) => {
    window.open(this.url, '_blank');
  }
}
