import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVitrineComponent } from './navbar-vitrine.component';

describe('NavbarVitrineComponent', () => {
  let component: NavbarVitrineComponent;
  let fixture: ComponentFixture<NavbarVitrineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVitrineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
