import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConseillerComponent } from './navbar-conseiller.component';

describe('NavbarConseillerComponent', () => {
  let component: NavbarConseillerComponent;
  let fixture: ComponentFixture<NavbarConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
