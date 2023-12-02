import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-admin';
  isLine = false;
  constructor(){
    this.isLine = false;
  }
  createLine(){
    this.isLine = true;
  }
}
