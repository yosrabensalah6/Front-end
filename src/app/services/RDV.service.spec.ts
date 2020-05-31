import { TestBed } from '@angular/core/testing';

import { RDVService } from './metiers.service';

describe('MetiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RDVService = TestBed.get(RDVService);
    expect(service).toBeTruthy();
  });
});
