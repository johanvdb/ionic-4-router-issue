import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePage } from './username.page';

describe('UsernamePage', () => {
  let component: UsernamePage;
  let fixture: ComponentFixture<UsernamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
