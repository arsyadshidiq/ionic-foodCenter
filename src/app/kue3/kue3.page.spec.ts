import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kue3Page } from './kue3.page';

describe('Kue3Page', () => {
  let component: Kue3Page;
  let fixture: ComponentFixture<Kue3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kue3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kue3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
