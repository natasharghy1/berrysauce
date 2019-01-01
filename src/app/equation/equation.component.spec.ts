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

  it('should create the equation component', () => {
    const fixture = TestBed.createComponent(EquationComponent);
    const equ = fixture.debugElement.componentInstance;
  expect(equ).toBeTruthy();
});

it('should display a result', () => {
  const fixture = TestBed.createComponent(EquationComponent);
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  expect(compiled.querySelector('span').textContent).toContain('Distance in meters: ');
});  

it('should have a button to calculate the result', () => {
  const fixture = TestBed.createComponent(EquationComponent);
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  expect(compiled.querySelector('button').textContent).toContain('Calculate Distance');
}); 

it('should have an input for speed and time', () => {
  const fixture = TestBed.createComponent(EquationComponent);
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  expect(compiled.querySelector('label').textContent).toContain('Speed:');
}); 

});
