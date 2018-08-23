import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe} from './app.sqrt';
import{MyserviceService} from './myservice.service';
import { StudentRegistartionCmpComponent } from './student-registartion-cmp/student-registartion-cmp.component';
import{FormsModule} from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    StudentRegistartionCmpComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",
    component:StudentRegistartionCmpComponent},
         {
            path: 'student-list',
            component: StudentListComponent
         }
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
