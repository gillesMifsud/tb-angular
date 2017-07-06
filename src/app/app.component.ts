import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  titleChanged: boolean = false;
  randomColor: string = '';

  public changeTitle() {
    this.title = 'new title!';
    this.titleChanged = true;
  }

  public getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //function to set a new random color
  public setColor() {
    this.randomColor = this.getRandomColor();
  }
}
