import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideoComponent } from './form-video.component';

describe('FormVideoComponent', () => {
  let component: FormVideoComponent;
  let fixture: ComponentFixture<FormVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
