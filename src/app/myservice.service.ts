import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  serviceProperty="Service created";
  StudentArray=[];
  showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
}
