import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestAdComponent } from './list-request-ad.component';

describe('ListRequestAdComponent', () => {
  let component: ListRequestAdComponent;
  let fixture: ComponentFixture<ListRequestAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequestAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
