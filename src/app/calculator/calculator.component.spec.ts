//Testing
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calculator', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calc = fixture.debugElement.componentInstance;
  expect(calc).toBeTruthy();
});

  it('should have a button present', () => {
     const fixture = TestBed.createComponent(CalculatorComponent);
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();
     expect(compiled.querySelector('button').textContent).toContain('Add');
  });  
  
});

