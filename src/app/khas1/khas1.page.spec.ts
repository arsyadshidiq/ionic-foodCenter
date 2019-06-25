import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khas1Page } from './khas1.page';

describe('Khas1Page', () => {
  let component: Khas1Page;
  let fixture: ComponentFixture<Khas1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khas1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
