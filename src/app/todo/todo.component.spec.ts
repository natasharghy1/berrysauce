import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//testing presence of app-component
  it(`should have as title 'GCSE STEM Learning Aid'`, () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('GCSE STEM Learning Aid');
});

it('should render title in a h2 tag', () => {
  const fixture = TestBed.createComponent(TodoComponent);
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  expect(compiled.querySelector('h2').textContent).toContain('My Goals and To-Dos');
});

});

