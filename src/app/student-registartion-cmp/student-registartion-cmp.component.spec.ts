import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistartionCmpComponent } from './student-registartion-cmp.component';

describe('StudentRegistartionCmpComponent', () => {
  let component: StudentRegistartionCmpComponent;
  let fixture: ComponentFixture<StudentRegistartionCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistartionCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistartionCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
