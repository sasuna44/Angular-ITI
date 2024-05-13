import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments } from '../_models/departments';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private baseUrl="http://localhost:8000/departments/";
  getAll(){
    return this.http.get<Departments[]>(this.baseUrl)
  }
  getById(id:number){
    return this.http.get<Departments>(this.baseUrl+id)

  }
  add(dept:Departments){
    return this.http.post<Departments>(this.baseUrl,dept)

  }
  delete(id:number){
    return this.http.delete(this.baseUrl+id)
  }
  update(dept:Departments){
    return this.http.put<Departments>(this.baseUrl+dept._id, dept)
  }


  constructor(private http:HttpClient) { }
}
