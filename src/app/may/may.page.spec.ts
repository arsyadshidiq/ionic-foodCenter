import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayPage } from './may.page';

describe('MayPage', () => {
  let component: MayPage;
  let fixture: ComponentFixture<MayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
