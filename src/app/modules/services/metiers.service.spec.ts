import { TestBed } from '@angular/core/testing';

import { MetiersService } from './metiers.service';

describe('MetiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetiersService = TestBed.get(MetiersService);
    expect(service).toBeTruthy();
  });
});
