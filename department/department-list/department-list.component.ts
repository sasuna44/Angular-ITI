import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentsService } from '../../_service/departments.service';
import { Departments } from '../../_models/departments';
import { Subscriber, Subscription } from 'rxjs';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit  , OnDestroy{
  departments:Departments[]=[];
  sub:Subscription |null = null ;
  constructor(public departmentService:DepartmentsService){

  }
  ngOnInit(): void {
   this.sub= this.departmentService.getAll().subscribe(data => this.departments=data);
  }
  ngOnDestroy(): void {
   this.sub?.unsubscribe();   
  }
}
