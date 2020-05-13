import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProprietaireComponent } from './ajouter-proprietaire.component';

describe('AjouterProprietaireComponent', () => {
  let component: AjouterProprietaireComponent;
  let fixture: ComponentFixture<AjouterProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
