import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotiComponent } from './list-noti.component';

describe('ListNotiComponent', () => {
  let component: ListNotiComponent;
  let fixture: ComponentFixture<ListNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
