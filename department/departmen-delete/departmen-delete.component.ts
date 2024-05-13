import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../_service/departments.service';
import { Departments } from '../../_models/departments';

@Component({
  selector: 'app-departmen-delete',
  standalone: true,
  imports: [],
  templateUrl: './departmen-delete.component.html',
  styleUrl: './departmen-delete.component.css'
})
export class DepartmenDeleteComponent implements OnInit , OnDestroy  {
  constructor(private router:Router , public departmentService:DepartmentsService , public activatedRoute:ActivatedRoute ){}
  department:Departments = new Departments (0 , '' , '');
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.departmentService.getById(params['id']).subscribe(dept=>{
        this.department = dept;
      });
    });
  }
  delete(id:number){
    this.departmentService.delete(id).subscribe(dept=>{
      this.router.navigateByUrl('/departments')
    })
  }
  ngOnDestroy(): void {
      
  }
}

