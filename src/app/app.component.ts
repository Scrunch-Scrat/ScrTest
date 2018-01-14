import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'test', content: 'This is a Test'}];
  OddNumbers: number[] = [];
  EvenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
   if ( firedNumber % 2 === 0) {
    this.EvenNumbers.push(firedNumber);
   } else {
     this.OddNumbers.push(firedNumber);
   }
  }
}
