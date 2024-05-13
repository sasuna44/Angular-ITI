import { Component, OnDestroy, OnInit } from '@angular/core';
import { Departments } from '../../_models/departments';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DepartmentsService } from '../../_service/departments.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-departmen-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './departmen-details.component.html',
  styleUrl: './departmen-details.component.css'
})
export class DepartmenDetailsComponent implements OnInit , OnDestroy{
  department:Departments|null= null;
  sub:Subscription|null = null;
  constructor(public activatedRoute:ActivatedRoute , public departmentService:DepartmentsService){}
  ngOnInit(): void {
     this.sub= this.activatedRoute.params.subscribe(par=>{
       this.departmentService.getById(par['id']).subscribe(data=>this.department=data);
      })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();   

  }

}
