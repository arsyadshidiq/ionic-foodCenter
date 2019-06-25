import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khas5Page } from './khas5.page';

describe('Khas5Page', () => {
  let component: Khas5Page;
  let fixture: ComponentFixture<Khas5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khas5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khas5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
