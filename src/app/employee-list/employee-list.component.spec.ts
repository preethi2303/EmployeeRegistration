import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeListComponent } from './employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from '../resource/employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/observable/from';
describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let service : EmployeeService;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new EmployeeService(null);
    component = new EmployeeListComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set employee property with the data returned from server',()=>{
    const employees :Employee[]=[
      {
        firstName:'pree',
        lastName:'awant',
        gender:'Female',
        department:'Hr',
        date:'29/19/2019'
      },
      {
        firstName:'rty',
        lastName:'ere',
        gender:'Female',
        department:'Hr',
        date:'29/19/2019'
      }
    ]

    spyOn(service,'getEmployeesList').and.callFake(()=>{
      return Observable.from([employees])
    })
    component.ngOnInit();

    expect(component.employees).toEqual(employees)

  })

  it('should set the error property if server returns error when gettion employeelist',() =>{
    const error = new Error('server error');
    spyOn(service,'getEmployeesList').and.returnValue(Observable.throw(error));

    expect(component.error).not.toBeDefined();

    component.ngOnInit();
    expect(component.error).toBeDefined();
  })

});
