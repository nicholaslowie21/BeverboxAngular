import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBoxesComponent } from './view-all-boxes.component';

describe('ViewAllBoxesComponent', () => {
  let component: ViewAllBoxesComponent;
  let fixture: ComponentFixture<ViewAllBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
