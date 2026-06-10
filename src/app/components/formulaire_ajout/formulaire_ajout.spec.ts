import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjout } from './formulaire_ajout';

describe('FormulaireAjout', () => {
  let component: FormulaireAjout;
  let fixture: ComponentFixture<FormulaireAjout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAjout],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireAjout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
