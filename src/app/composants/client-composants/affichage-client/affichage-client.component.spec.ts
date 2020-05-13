import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageClientComponent } from './affichage-client.component';

describe('AffichageClientComponent', () => {
  let component: AffichageClientComponent;
  let fixture: ComponentFixture<AffichageClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
