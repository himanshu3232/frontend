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
  isValid : boolean = true;
  onClick = (e : any) => {
    window.open(this.url, '_blank');
  }
  onInput = (e : any) => {
    this.userName = e.target.value;
    const regex : RegExp = /^[A-Z]{1}[ A-Za-z]{2,}/;
    if(regex.test(this.userName)){
      this.isValid = true;
    }else {
      this.isValid = false;
    }
  }
}
