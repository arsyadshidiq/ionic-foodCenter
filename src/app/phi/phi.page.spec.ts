import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiPage } from './phi.page';

describe('PhiPage', () => {
  let component: PhiPage;
  let fixture: ComponentFixture<PhiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
