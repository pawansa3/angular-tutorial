import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-childto-parent',
  templateUrl: './data-childto-parent.component.html',
  styleUrls: ['./data-childto-parent.component.css']
})
export class DataChildtoParentComponent implements OnInit {

  constructor() { }

  @Output() parentComponentFunction: EventEmitter<any> = new EventEmitter()
  @Output() parentComponentFunction2: EventEmitter<any> = new EventEmitter()
  ngOnInit(): void {
    this.parentComponentFunction.emit("hello")
  }

  sendData() {
    var data = "Pawan Kumar Sah"
    this.parentComponentFunction2.emit(data)
  }

}
