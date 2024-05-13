import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../_service/student.service'
import { Student } from '../../_models/student';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DepartmentsService } from '../../_service/departments.service';
import { Departments } from '../../_models/departments';
@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent implements OnInit{
  student:Student=new Student(0,"" , 0, "defualtimage");
  departments:Departments[]=[];
  sub:Subscription|null=null;
  constructor( public studentService:StudentService , public router:Router , public departmentService:DepartmentsService) { }
ngOnInit(): void {
  this.sub= this.departmentService.getAll().subscribe(data => this.departments=data);

}
  save(){
    this.studentService.add(this.student).subscribe(
      res=>{
        console.log(`the resutl is ${res}`);
        this.router.navigateByUrl("/students");
      }
    )
  }

}
