import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageBienVitrineComponent } from './affichage-bien-vitrine.component';

describe('AffichageBienVitrineComponent', () => {
  let component: AffichageBienVitrineComponent;
  let fixture: ComponentFixture<AffichageBienVitrineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageBienVitrineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageBienVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
