import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmenAddComponent } from './department/departmen-add/departmen-add.component';
import { DepartmenUpdateComponent } from './department/departmen-update/departmen-update.component';
import { DepartmenDetailsComponent } from './department/departmen-details/departmen-details.component';
import { DepartmenDeleteComponent } from './department/departmen-delete/departmen-delete.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentListComponent } from './student/student-list/student-list.component';


export const routes: Routes = [

    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
  

    {path:"",component:NotfoundComponent},
    // departments
    {path:"departments",component:DepartmentListComponent},
    {path:"departments/add",component:DepartmenAddComponent},
    {path:"departments/update/:id",component:DepartmenUpdateComponent},
    {path:"departments/details/:id",component:DepartmenDetailsComponent},
    {path:"departments/delete/:id",component:DepartmenDeleteComponent},
// student
    {path:"students",component:StudentListComponent},
    {path:"students/add",component:StudentAddComponent},
    {path:"students/update/:id",component:StudentUpdateComponent},
    {path:"students/details/:id",component:StudentDetailsComponent},
    {path:"students/delete/:id",component:StudentDeleteComponent},



];
