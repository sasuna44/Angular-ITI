import { Component } from '@angular/core';
import { Departments } from '../../_models/departments';
import { FormsModule } from '@angular/forms';
import { DepartmentsService } from '../../_service/departments.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-departmen-add',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './departmen-add.component.html',
  styleUrl: './departmen-add.component.css'
})
export class DepartmenAddComponent {
  department:Departments=new Departments( 0  ,"" , "")
  constructor( private departmentService:DepartmentsService , private router:Router) { }
  save(){
    this.departmentService.add(this.department).subscribe(
      res=>{
        this.router.navigateByUrl("/departments");
      }
    )
  }
}
