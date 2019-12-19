import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';


const routes: Routes = [
  // {path:'registerEmployee',component:EmployeeRegistrationComponent},
  // {path:'',component:EmployeeListComponent}
  {path:'employeeList',component:EmployeeListComponent},
  {path:'',component:EmployeeRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
