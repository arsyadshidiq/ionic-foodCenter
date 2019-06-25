import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BruPage } from './bru.page';

describe('BruPage', () => {
  let component: BruPage;
  let fixture: ComponentFixture<BruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BruPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
