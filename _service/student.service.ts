import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl="http://localhost:8000/students/";
  
  getAll(){
    return this.http.get<Student[]>(this.baseUrl)
  }
  getById(id:number){
    return this.http.get<Student>(this.baseUrl+id)

  }
  add(student:Student){
    return this.http.post<Student>(this.baseUrl,student)

  }
  delete(id:number){
    return this.http.delete(this.baseUrl +id)
  }
  update(student:Student){
    return this.http.put<Student>(this.baseUrl+student._id, student)
  }


  constructor(private http:HttpClient) { }
}

