import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBienImmobiliersComponent } from './liste-bien-immobiliers.component';

describe('ListeBienImmobiliersComponent', () => {
  let component: ListeBienImmobiliersComponent;
  let fixture: ComponentFixture<ListeBienImmobiliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBienImmobiliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBienImmobiliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
