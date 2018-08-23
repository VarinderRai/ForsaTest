import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../myservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }
studentList=[];
  ngOnInit() {
    this.studentList=this.myservice.StudentArray;
  }

}
