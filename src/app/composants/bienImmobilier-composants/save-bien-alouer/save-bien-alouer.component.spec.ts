import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBienALouerComponent } from './save-bien-alouer.component';

describe('SaveBienALouerComponent', () => {
  let component: SaveBienALouerComponent;
  let fixture: ComponentFixture<SaveBienALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBienALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBienALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
