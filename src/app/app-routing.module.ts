import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';


const routes: Routes = [
  { path: '', redirectTo: 'employeeRegistration', pathMatch: 'full' },
  { path: 'employeeRegistration', component: EmployeeRegistrationComponent },
  { path: 'employeeList', component: EmployeeListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
