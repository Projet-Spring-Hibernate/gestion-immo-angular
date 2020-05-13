import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageProprietaireComponent } from './affichage-proprietaire.component';

describe('AffichageProprietaireComponent', () => {
  let component: AffichageProprietaireComponent;
  let fixture: ComponentFixture<AffichageProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
