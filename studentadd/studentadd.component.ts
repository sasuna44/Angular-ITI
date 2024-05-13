import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../_service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentadd.component.html',
  styleUrl: './studentadd.component.css'
})
export class StudentaddComponent {
// nstd:Student=new Student("sara",0,0);
// constructor(public studentService:StudentService,public router:Router){}
// save(){
// this.studentService.add(this.nstd)
// this.router.navigateByUrl("/student/list");
// }
}
