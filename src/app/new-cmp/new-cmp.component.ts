import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
newcomponent = "Entered in new component created";
todayDate;
newcomponentProperty;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todayDate= this.myservice.showTodayDate();
    this.newcomponentProperty=this.myservice.serviceProperty;
  }

}
