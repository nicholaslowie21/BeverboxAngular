import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPromotionsComponent } from './view-all-promotions.component';

describe('ViewAllPromotionsComponent', () => {
  let component: ViewAllPromotionsComponent;
  let fixture: ComponentFixture<ViewAllPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
