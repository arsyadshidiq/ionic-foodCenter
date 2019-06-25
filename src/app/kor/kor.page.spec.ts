import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorPage } from './kor.page';

describe('KorPage', () => {
  let component: KorPage;
  let fixture: ComponentFixture<KorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
