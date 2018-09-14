import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancelComponent } from './form-cancel.component';

describe('FormCancelComponent', () => {
  let component: FormCancelComponent;
  let fixture: ComponentFixture<FormCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
