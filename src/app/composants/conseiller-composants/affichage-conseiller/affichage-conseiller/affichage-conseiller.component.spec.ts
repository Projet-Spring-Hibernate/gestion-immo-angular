import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageConseillerComponent } from './affichage-conseiller.component';

describe('AffichageConseillerComponent', () => {
  let component: AffichageConseillerComponent;
  let fixture: ComponentFixture<AffichageConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
