import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageContratComponent } from './affichage-contrat.component';

describe('AffichageContratComponent', () => {
  let component: AffichageContratComponent;
  let fixture: ComponentFixture<AffichageContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
