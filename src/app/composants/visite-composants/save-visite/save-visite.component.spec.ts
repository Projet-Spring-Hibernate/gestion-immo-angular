import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVisiteComponent } from './save-visite.component';

describe('SaveVisiteComponent', () => {
  let component: SaveVisiteComponent;
  let fixture: ComponentFixture<SaveVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
