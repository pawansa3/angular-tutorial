import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataServiceService {

  constructor() { }

  getData(){
    return {
      name:'Peter',
      age: 21,
      id: 101
    }
  }

}
