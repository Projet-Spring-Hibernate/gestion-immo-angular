import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConseillerComponent } from './save-conseiller.component';

describe('SaveConseillerComponent', () => {
  let component: SaveConseillerComponent;
  let fixture: ComponentFixture<SaveConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
