import { Component } from '@angular/core';
import { UsersDataServiceService } from './users-data-service.service'
import {ApiCallServiceService} from './api-call-service.service'

import { dataType } from './users-models'

// interface dataType {
//   name: string,
//   id: number,
//   indian: boolean,
//   address: any,
// }

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  dataFromUserService:any = ''
  apiData:any=''
  // apiData=[{id:'',title:'', userId:''}]
  constructor(private user:UsersDataServiceService, private apiUser: ApiCallServiceService) {
    this.reset();

    console.log(this.user.getData())
    // let data = this.user.getData()
    this.dataFromUserService = this.user.getData()

    // calling the getData function to get data from apicall service
    this.apiUser.getData().subscribe((data: any) => {
      console.log(data)
      this.apiData=data
    })


  }
  
  title = 'angular10_learn title from ts goes to app html is called property';
  appName = "my app name";
  getName(){
    return  this.appName + " is angular 10"
  }
  obj = {
    name: this.appName,
    age: 10
  }
  arr = ['apple', 'ball', 'cat']
  siteUrl = window.location.href
  handleClick(name: any) {
    alert(name)
  }
  myEvent(value: any) {
    console.log(value)
  }
  currentVal=''
  myEvent2(event: any){
    console.log(event.target.value)
    this.currentVal = event.target.value;
  }
  disabledBox = true
  enableBox() {
    this.disabledBox = false
  }
  show=false
  showstr='yes'
  color="red"

  dataArr=["anil", "peter", "mike"]
  dataObj=[{name:"abc", age:25}, {name:"abc", age:25}, {name:"abc", age:25}]

  handleSubmit(value: any) {
    console.log(value)
  }

  // bootstrap alert funcitons

  // bootstrap alert funcitons
  // bootstrap alert funcitons
  // bootstrap alert funcitons
  alerts!: Alert[];

  

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  // bootstrap alert funcitons

  // passing data to child component
  dataForChild= { name:"pawan", age:25}

  // passing data from child to parent component
  parentComponentFunction(data:any){
    console.log(data)
  }

  dataFromChildToParent=''
  parentComponentFunction2(data:any){
    this.dataFromChildToParent = data
  }

  // pipes
  today = Date.now()
  money=100

  // data for model
  getDataModel() {
    const data:dataType = {
      name:'pawan kumar',
      id: 100,
      indian: false,
      address: "nepal"
    }
    return data;
  }
}

// interpolation is used when we want to take data from app.ts file to app.html file