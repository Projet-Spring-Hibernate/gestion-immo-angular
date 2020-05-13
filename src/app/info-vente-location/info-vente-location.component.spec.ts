import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVenteLocationComponent } from './info-vente-location.component';

describe('InfoVenteLocationComponent', () => {
  let component: InfoVenteLocationComponent;
  let fixture: ComponentFixture<InfoVenteLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVenteLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVenteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
