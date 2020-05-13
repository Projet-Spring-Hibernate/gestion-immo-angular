import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosContactComponent } from './infos-contact.component';

describe('InfosContactComponent', () => {
  let component: InfosContactComponent;
  let fixture: ComponentFixture<InfosContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
