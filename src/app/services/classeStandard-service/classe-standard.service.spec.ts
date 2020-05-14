import { TestBed } from '@angular/core/testing';

import { ClasseStandardService } from './classe-standard.service';

describe('ClasseStandardService', () => {
  let service: ClasseStandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasseStandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
