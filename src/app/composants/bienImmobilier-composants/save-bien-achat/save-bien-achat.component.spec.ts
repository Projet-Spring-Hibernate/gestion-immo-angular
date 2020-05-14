import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBienAchatComponent } from './save-bien-achat.component';

describe('SaveBienAchatComponent', () => {
  let component: SaveBienAchatComponent;
  let fixture: ComponentFixture<SaveBienAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBienAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBienAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
