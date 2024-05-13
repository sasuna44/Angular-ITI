import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Student } from '../_models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { StudentService } from '../_service/student.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './student-list.component.html',
  styleUrls: []
})


export class StudentListComponent  {
  // std: Student[] = [];
  // dflag: boolean = false;
  // editMode: boolean = false;
  // dstd: Student = new Student("", 0, 0);
  // nstd: Student = new Student("", 0, 0);
  //     constructor(public studentService:StudentService,public router:Router){}
  //     ngOnInit(){
  //       this.std=this.studentService.getAll();

  //     }
    
  //     deleteStudent(id: number): void {
  //       this.studentService.delete(id);
  //       this.ngOnInit();
  //     }
  //     editStudent(updatedStudent: Student): void {
  //       this.nstd = { ...updatedStudent};

  //       this.editMode = true;
  //   }

  //   update(): void {
  //       this.studentService.edit(this.nstd);
  //       this.editMode = false;
  //       this.ngOnInit();
  //   }

  //   getById(id: number): void {
  //     this.dstd = this.studentService.getById(id) || new Student("", 0, 0);
  //     this.dflag = true;
  // }
  

  //   closeDetails(): void {
  //       this.dflag = false;
  //   }
  //   goToAdd(){
  //     this.router.navigateByUrl("/student/add");
  //   }
  //   OnDestroy(){

  //   }
    }