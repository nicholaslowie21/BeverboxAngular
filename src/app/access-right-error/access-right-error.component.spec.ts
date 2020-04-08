import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRightErrorComponent } from './access-right-error.component';

describe('AccessRightErrorComponent', () => {
  let component: AccessRightErrorComponent;
  let fixture: ComponentFixture<AccessRightErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRightErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRightErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
