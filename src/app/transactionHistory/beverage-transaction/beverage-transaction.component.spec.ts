import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageTransactionComponent } from './beverage-transaction.component';

describe('BeverageTransactionComponent', () => {
  let component: BeverageTransactionComponent;
  let fixture: ComponentFixture<BeverageTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeverageTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeverageTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
