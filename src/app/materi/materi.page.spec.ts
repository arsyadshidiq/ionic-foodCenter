import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriPage } from './materi.page';

describe('MateriPage', () => {
  let component: MateriPage;
  let fixture: ComponentFixture<MateriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
