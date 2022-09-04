import { TestBed } from '@angular/core/testing';

import { MakeanorderService } from './makeanorder.service';

describe('MakeanorderService', () => {
  let service: MakeanorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeanorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
