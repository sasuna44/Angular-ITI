import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{StudentService} from '../../_service/student.service'
import { Student } from '../../_models/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-delete',
  standalone: true,
  imports: [],
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent {
  constructor(private router:Router , public studentService:StudentService , public activatedRoute:ActivatedRoute ){}
  student:Student=new Student(0 ,"" ,"","");  
  sub:Subscription|null = null;
  gOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.studentService.getById(params['id']).subscribe(data => {
        this.student = data;
      });
    });
  }
  delete(id:number){
   this.sub = this.studentService.delete(id).subscribe(data=>{
      this.router.navigateByUrl('/students')
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
