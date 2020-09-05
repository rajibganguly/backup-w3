import { TestBed } from '@angular/core/testing';

import { W3esearviceMainService } from './w3esearvice-main.service';

describe('W3esearviceMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: W3esearviceMainService = TestBed.get(W3esearviceMainService);
    expect(service).toBeTruthy();
  });
});
