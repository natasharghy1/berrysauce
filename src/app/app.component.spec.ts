import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GCSE STEM Learning Aid'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GCSE STEM Learning Aid');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('GCSE STEM Learning Aid');
  });

  it('should have a navigation bar', () => {
      const fixture = TestBed.createComponent(AppComponent);
        const compiled = fixture.debugElement.nativeElement;
      fixture.detectChanges();
    expect(compiled.querySelector('nav').textContent).toContain('Log InCalculatorTodoPhysicsBiology');
  });


  });

