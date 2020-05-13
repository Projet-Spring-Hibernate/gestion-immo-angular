import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBiensImmobilierListeConseillerComponent } from './liste-biens-immobilier-liste-conseiller.component';

describe('ListeBiensImmobilierListeConseillerComponent', () => {
  let component: ListeBiensImmobilierListeConseillerComponent;
  let fixture: ComponentFixture<ListeBiensImmobilierListeConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBiensImmobilierListeConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBiensImmobilierListeConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
