import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOptionsComponent } from './view-all-options.component';

describe('ViewAllOptionsComponent', () => {
  let component: ViewAllOptionsComponent;
  let fixture: ComponentFixture<ViewAllOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
