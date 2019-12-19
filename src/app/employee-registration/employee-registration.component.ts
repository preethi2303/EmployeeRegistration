import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../resource/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  registered = false;
  employeeFrom: FormGroup;
  submitted = false;
  departments: any = ['Hr', 'IT', 'support'];
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit() {
    this.employeeFrom = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      department: ['', Validators.required]
    })
  }

  get f() { return this.employeeFrom.controls }

  onSubmit() {
    if (this.employeeFrom.invalid) {
      this.submitted = true;
      return
    }
    this.employeeService.createEmployee(this.employeeFrom.value)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employeeFrom.reset();
    this.submitted = false;
    this.registered = true;
  }

}
