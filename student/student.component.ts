import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
})

export class StudentComponent {
  id: number;
  name: string;
  age: number;

  
  constructor(){
     this.id=1
     this.name="buthina"
     this.age=24
  }
}
