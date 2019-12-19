import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../resource/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private employeeService:EmployeeService,private route: ActivatedRoute) { }
  employeeFrom: FormGroup;
  submitted = false;
  departments: any = ['Hr', 'IT', 'support'];
 
  ngOnInit() {
    this.employeeFrom = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      date:['',Validators.required],
      department:['',Validators.required]
    })
  }

  selectDepartment(e) {
    this.employeeFrom.value.department.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get f() { return this.employeeFrom.controls }

  onSubmit() {
    this.submitted = true;
      if (this.employeeFrom.invalid) {
    }
    else{
      this.employeeService.createEmployee(this.employeeFrom.value)
      .subscribe(data => console.log(data), error => console.log(error));
    }
    
  }

}
