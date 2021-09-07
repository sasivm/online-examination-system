import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPortalToolbarComponent } from './test-portal-toolbar.component';

describe('TestPortalToolbarComponent', () => {
  let component: TestPortalToolbarComponent;
  let fixture: ComponentFixture<TestPortalToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPortalToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPortalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
