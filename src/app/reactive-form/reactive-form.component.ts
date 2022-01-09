import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // for pre-filled value pass value to FormControl
  reactiveForm = new FormGroup({
    email: new FormControl('abc@gmail.com', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('abcd', [Validators.required])
  })

  get f() {
    return this.reactiveForm.controls;
  }

  handleSubmit() {
    // console.log(value)
    console.log(this.reactiveForm.value)
  }
}
