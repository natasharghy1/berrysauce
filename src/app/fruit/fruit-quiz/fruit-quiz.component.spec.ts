import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitQuizComponent } from './fruit-quiz.component';

describe('FruitQuizComponent', () => {
  let component: FruitQuizComponent;
  let fixture: ComponentFixture<FruitQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
