import { Component } from '@angular/core';
import { department} from '../_models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentsService } from '../_service/departments.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  // std: department[] = [];
  // dflag: boolean = false;
  // editMode: boolean = false;
  // dstd: department = new department("", 0);
  // nstd: department = new department("", 0);
  //     constructor(public departmentService:DepartmentsService){}
  //     load(){
  //       this.std=this.departmentService.getAll();
  //     }
  //     deletedepartment(id: number): void {
  //       this.departmentService.delete(id);
  //       this.load();
  //     }
  //     editdepartment(updateddepartment: department): void {
  //       this.nstd = { ...updateddepartment };
  //       this.editMode = true;
  //   }

  //   update(): void {
  //       this.departmentService.edit(this.nstd);
  //       this.editMode = false;
  //       this.load();
  //   }

  //   getById(id: number): void {
  //     this.dstd = this.departmentService.getById(id) || new department("", 0);
  //     this.dflag = true;
  // }
  

  //   closeDetails(): void {
  //       this.dflag = false;
  //   }


    }