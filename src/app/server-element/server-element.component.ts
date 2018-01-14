import { Component, OnInit, Input } from "@angular/core";
import {
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit
} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy,
    AfterViewChecked,
    AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input("srvElement") element: { type: string; name: string; content: string };
  constructor() {}

  ngOnChanges() {}
  ngDoCheck() {
    // called whenever angular detects changes - RUNS WITH EVERYCHANGE
  }

  ngOnInit() {
    // Called on component initialization
  }

  ngAfterContentInit() {
    // Called when we project into ng-content
    // Can use @ContentChild() after this is called
  }

  ngAfterContentChecked() {
    // Called after check cyle
  }

  ngAfterViewChecked() {
    // Called after check cyle
  }

  ngAfterViewInit() {
    // Called after view creation
    // Cant access template elements/DOM before this is called as it hasnt been rendered yet
    // can use @ViewChild() after this
  }

  ngOnDestroy() {
    // Called just before component is removed / destroyed
  }
}
