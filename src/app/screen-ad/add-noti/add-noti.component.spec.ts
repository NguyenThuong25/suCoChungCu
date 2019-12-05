import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotiComponent } from './add-noti.component';

describe('AddNotiComponent', () => {
  let component: AddNotiComponent;
  let fixture: ComponentFixture<AddNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
