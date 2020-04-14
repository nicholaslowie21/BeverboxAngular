import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllArticlesComponent } from './view-all-articles.component';

describe('ViewAllArticlesComponent', () => {
  let component: ViewAllArticlesComponent;
  let fixture: ComponentFixture<ViewAllArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
