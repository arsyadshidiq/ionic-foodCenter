import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhasPage } from './khas.page';

describe('KhasPage', () => {
  let component: KhasPage;
  let fixture: ComponentFixture<KhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
