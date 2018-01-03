import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynAlign = 'right';
  title = 'appxxx';
  age = 50;
  person = {
    name: 'Mark',
    age: 50
  };

  // if (age = 50) {
  //   this.dynAlign = 'left';
  // } else {
  //   this.dynAlign = 'center';
  // }

  getName() {
    return 'Bob';
  }

  setAge(age: number) {
    this.age = age;
  }
}
