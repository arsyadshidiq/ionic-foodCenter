import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khas3Page } from './khas3.page';

describe('Khas3Page', () => {
  let component: Khas3Page;
  let fixture: ComponentFixture<Khas3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khas3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khas3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
