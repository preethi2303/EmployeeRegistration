import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../resource/employee.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  error:Error;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getEmployeesList().
      subscribe((resp: Employee[]) => this.employees = _.orderBy(resp, ['firstName'], ['asc']),
      (error :Error)=>{ this.error = error;console.log(error)});
  }

}
