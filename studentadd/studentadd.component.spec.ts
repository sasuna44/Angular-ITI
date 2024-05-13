import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddComponent } from './studentadd.component';

describe('StudentaddComponent', () => {
  let component: StudentaddComponent;
  let fixture: ComponentFixture<StudentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
