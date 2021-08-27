import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpFormComponent } from './sing-up-form.component';

describe('SingUpFormComponent', () => {
  let component: SingUpFormComponent;
  let fixture: ComponentFixture<SingUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
