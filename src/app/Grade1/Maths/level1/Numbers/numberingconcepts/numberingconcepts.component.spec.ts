import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberingconceptsComponent } from './numberingconcepts.component';

describe('NumberingconceptsComponent', () => {
  let component: NumberingconceptsComponent;
  let fixture: ComponentFixture<NumberingconceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberingconceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberingconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
