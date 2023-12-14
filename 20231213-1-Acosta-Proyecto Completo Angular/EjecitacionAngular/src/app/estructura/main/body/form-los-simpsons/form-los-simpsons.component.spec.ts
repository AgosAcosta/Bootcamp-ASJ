import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLosSimpsonsComponent } from './form-los-simpsons.component';

describe('FormLosSimpsonsComponent', () => {
  let component: FormLosSimpsonsComponent;
  let fixture: ComponentFixture<FormLosSimpsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLosSimpsonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLosSimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
