import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.css']
})
export class ReusableComponentComponent implements OnInit {

  constructor() { }

  @Input() childData: any

  ngOnInit(): void {
  }

}
