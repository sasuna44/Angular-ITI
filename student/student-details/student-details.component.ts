import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import{StudentService} from '../../_service/student.service'
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student:Student|null=null;
  sub:Subscription|null = null;
  constructor(public activatedRoute:ActivatedRoute , public studentService:StudentService){}
  ngOnInit(): void {
    this.sub=this.activatedRoute.params.subscribe(par=>{
      this.studentService.getById(par['id']).subscribe(data=>this.student=data);
  
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
      
  }


}
