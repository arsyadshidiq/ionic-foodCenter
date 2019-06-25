import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpnPage } from './jpn.page';

describe('JpnPage', () => {
  let component: JpnPage;
  let fixture: ComponentFixture<JpnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
