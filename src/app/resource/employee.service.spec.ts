import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let employeeService :EmployeeService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [EmployeeService]
  }));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });

  // it('should check if new employee is added to list',() =>{
  //   const newEmployee = {firstName:'preety',lastName:'zinta',gender:'female',department:'hr',date:'23/02/2019'};
  //   EmployeeService.createEmployee(newEmployee)

  // })

});
