import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConseillerComponent } from './liste-conseiller.component';

describe('ListeConseillerComponent', () => {
  let component: ListeConseillerComponent;
  let fixture: ComponentFixture<ListeConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
