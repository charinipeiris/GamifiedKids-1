import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberingComponent } from './numbering.component';

describe('NumberingComponent', () => {
  let component: NumberingComponent;
  let fixture: ComponentFixture<NumberingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
