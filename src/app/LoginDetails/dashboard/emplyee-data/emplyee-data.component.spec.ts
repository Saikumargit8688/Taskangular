import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeDataComponent } from './emplyee-data.component';

describe('EmplyeeDataComponent', () => {
  let component: EmplyeeDataComponent;
  let fixture: ComponentFixture<EmplyeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplyeeDataComponent]
    });
    fixture = TestBed.createComponent(EmplyeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
