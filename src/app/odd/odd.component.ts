import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // Allows us to pass data from outside into this component
 @Input() oddNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
