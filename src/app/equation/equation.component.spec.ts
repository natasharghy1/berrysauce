import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EquationComponent } from './equation.component';
import { FormsModule } from '@angular/forms';

describe('EquationComponent', () => {
  let component: EquationComponent;
  let fixture: ComponentFixture<EquationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the equation', () => {
    const fixture = TestBed.createComponent(EquationComponent);
    const equ = fixture.debugElement.componentInstance;
  expect(equ).toBeTruthy();
});
});
