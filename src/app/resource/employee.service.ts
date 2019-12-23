import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:4444/posts';
 
  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }
  createEmployee(data){
    return this.http.post(this.baseUrl,data);
  }

 
}
