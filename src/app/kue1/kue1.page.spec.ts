import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kue1Page } from './kue1.page';

describe('Kue1Page', () => {
  let component: Kue1Page;
  let fixture: ComponentFixture<Kue1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kue1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kue1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
