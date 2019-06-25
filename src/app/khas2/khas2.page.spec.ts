import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khas2Page } from './khas2.page';

describe('Khas2Page', () => {
  let component: Khas2Page;
  let fixture: ComponentFixture<Khas2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khas2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khas2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
