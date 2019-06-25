import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinPage } from './cin.page';

describe('CinPage', () => {
  let component: CinPage;
  let fixture: ComponentFixture<CinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
