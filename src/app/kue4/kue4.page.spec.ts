import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kue4Page } from './kue4.page';

describe('Kue4Page', () => {
  let component: Kue4Page;
  let fixture: ComponentFixture<Kue4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kue4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kue4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
