import { TestBed } from '@angular/core/testing';

import { GettingService } from './getting.service';

describe('GettingService', () => {
  let service: GettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
