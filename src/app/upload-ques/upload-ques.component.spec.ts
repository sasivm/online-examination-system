import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQuesComponent } from './upload-ques.component';

describe('UploadQuesComponent', () => {
  let component: UploadQuesComponent;
  let fixture: ComponentFixture<UploadQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
