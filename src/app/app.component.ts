import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloProject';
  // declared array of months.
   months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
            todayDate=new Date();
   isAvailable=true;
   ButtonClick(event){
     alert("Button clicked");
     console.log(event);
   };
   componentProperty;
constructor(private myservice: MyserviceService){}
ngOnInit(){
  this.myservice.serviceProperty="Component created";
  this.componentProperty=this.myservice.serviceProperty;
}
}
