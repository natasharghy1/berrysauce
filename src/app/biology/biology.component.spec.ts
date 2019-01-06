import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologyComponent } from './biology.component';
import { FormsModule } from '@angular/forms';

describe('BiologyComponent', () => {
  let component: BiologyComponent;
  let fixture: ComponentFixture<BiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologyComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the list of plant cell parts', () => {
    const fixture = TestBed.createComponent(BiologyComponent);
    const bio = fixture.debugElement.componentInstance;
  expect(bio).toBeTruthy();
});

  it('should have a list of plant components', () => {
     const fixture = TestBed.createComponent(BiologyComponent);
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();
     expect(compiled.querySelector('ul').textContent).toContain('1 Cell membrane 2 Nucleus 3 Golgi Apparatus 4 Ribosomes 5 Chloroplast 6 Rough endoplasmic reticulum 7 Cell wall 8 Cytoplasm 9 Vacuole 10 Mitochondria 11 Perixosome ');
  });  

 it('should display a result', () => {
  const fixture = TestBed.createComponent(BiologyComponent);
  const compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  expect(compiled.querySelector('h3').textContent).toContain('{{cellParts.name}}');
});  

});
