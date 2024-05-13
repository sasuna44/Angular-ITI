import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentsService } from '../../_service/departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departments } from '../../_models/departments';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departmen-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './departmen-update.component.html',
  styleUrl: './departmen-update.component.css'
})
export class DepartmenUpdateComponent implements OnInit , OnDestroy {
  constructor( public departmentService:DepartmentsService  ,public router:Router, public activatedRoute:ActivatedRoute){}
  department:Departments = new Departments (0 , '' , '');
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.departmentService.getById(params['id']).subscribe(dept=>{
        this.department = dept;
      });
    });
  }
  update(){
    this.departmentService.update(this.department).subscribe(dept=>{
      this.router.navigateByUrl("/departments")
    })
  }
 

    ngOnDestroy(): void {
        
    } 
  }

