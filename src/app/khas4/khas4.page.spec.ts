import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khas4Page } from './khas4.page';

describe('Khas4Page', () => {
  let component: Khas4Page;
  let fixture: ComponentFixture<Khas4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khas4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khas4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
