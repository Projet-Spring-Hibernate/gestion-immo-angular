import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilConseillerComponent } from './accueil-conseiller.component';

describe('AccueilConseillerComponent', () => {
  let component: AccueilConseillerComponent;
  let fixture: ComponentFixture<AccueilConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
