import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMySubscriptionHistoryComponent } from './view-my-subscription-history.component';

describe('ViewMySubscriptionHistoryComponent', () => {
  let component: ViewMySubscriptionHistoryComponent;
  let fixture: ComponentFixture<ViewMySubscriptionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMySubscriptionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMySubscriptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
