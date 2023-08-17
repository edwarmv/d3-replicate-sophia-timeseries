import { TestBed } from '@angular/core/testing';

import { DolarBlueService } from './dolar-blue.service';

describe('DolarBlueService', () => {
  let service: DolarBlueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarBlueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
