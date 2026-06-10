import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduits } from './modifier-produits';

describe('ModifierProduits', () => {
  let component: ModifierProduits;
  let fixture: ComponentFixture<ModifierProduits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierProduits],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierProduits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
