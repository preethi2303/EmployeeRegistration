import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRegistrationComponent } from './employee-registration.component';

describe('EmployeeRegistrationComponent', () => {
  let component: EmployeeRegistrationComponent;
  let fixture: ComponentFixture<EmployeeRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,RouterTestingModule,HttpClientModule],
      declarations: [ EmployeeRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.employeeFrom.valid).toBeFalsy();
});

it('name field validity', () => {
    let firstName = component.employeeFrom.controls['firstName'];
    expect(firstName.valid).toBeFalsy();

    firstName.setValue("");
    expect(firstName.hasError('required')).toBeTruthy();
});

});
