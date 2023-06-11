import { TestBed } from '@angular/core/testing';

import { BurguerService } from './burguer.service';

describe('BurguerService', () => {
  let service: BurguerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurguerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
