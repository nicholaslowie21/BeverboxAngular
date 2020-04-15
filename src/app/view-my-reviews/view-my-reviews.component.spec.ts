import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyReviewsComponent } from './view-my-reviews.component';

describe('ViewMyReviewsComponent', () => {
  let component: ViewMyReviewsComponent;
  let fixture: ComponentFixture<ViewMyReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
