import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveContratComponent } from './save-contrat.component';

describe('SaveContratComponent', () => {
  let component: SaveContratComponent;
  let fixture: ComponentFixture<SaveContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
