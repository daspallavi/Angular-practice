import { Component, OnInit, Input, OnChanges , SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges {
@Input() element: {type: string, name: string, content: string};
  constructor() {
   console.log('constructor called!!!');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange called!!!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!!!');
  }

}
