import { TestBed } from '@angular/core/testing';

import { AdresseServiceService } from './adresse-service.service';

describe('AdresseServiceService', () => {
  let service: AdresseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
