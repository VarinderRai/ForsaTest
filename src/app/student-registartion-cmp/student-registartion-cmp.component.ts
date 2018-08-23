import { Component, OnInit } from '@angular/core';
import{MyserviceService} from './../myservice.service';

@Component({
  selector: 'app-student-registartion-cmp',
  templateUrl: './student-registartion-cmp.component.html',
  styleUrls: ['./student-registartion-cmp.component.css']
})
export class StudentRegistartionCmpComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }
AddtoArray= function(data){
  debugger;
this.myservice.StudentArray[this.myservice.StudentArray.length]=data;
}
}
