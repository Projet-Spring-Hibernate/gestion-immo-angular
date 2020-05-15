import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageVisiteComponent } from './affichage-visite.component';

describe('AffichageVisiteComponent', () => {
  let component: AffichageVisiteComponent;
  let fixture: ComponentFixture<AffichageVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
