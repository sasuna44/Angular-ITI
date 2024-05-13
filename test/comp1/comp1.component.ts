import { Component } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [Comp2Component,FormsModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  name="alaa";
  fullname="";
  myfun(s:string){
  this.fullname=s;
  }
}
