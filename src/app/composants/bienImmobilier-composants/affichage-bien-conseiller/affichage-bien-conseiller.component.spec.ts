import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageBienConseillerComponent } from './affichage-bien-conseiller.component';

describe('AffichageBienConseillerComponent', () => {
  let component: AffichageBienConseillerComponent;
  let fixture: ComponentFixture<AffichageBienConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageBienConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageBienConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
