import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTempComponent } from './left-temp.component';

describe('LeftTempComponent', () => {
  let component: LeftTempComponent;
  let fixture: ComponentFixture<LeftTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
