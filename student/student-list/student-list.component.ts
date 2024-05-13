import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { Subscription } from 'rxjs';
import { StudentService } from '../../_service/student.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent  implements OnInit , OnDestroy{
  students:Student[]=[];
  sub:Subscription|null = null;
  constructor(public studentsService:StudentService){}
  ngOnInit(): void {
    this.sub = this.studentsService.getAll().subscribe(data => this.students=data);
      
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();   
   }


}
