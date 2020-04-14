import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBeverageComponent } from './view-beverage.component';

describe('ViewBeverageComponent', () => {
  let component: ViewBeverageComponent;
  let fixture: ComponentFixture<ViewBeverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBeverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
