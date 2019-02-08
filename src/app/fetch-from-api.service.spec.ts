import { TestBed } from '@angular/core/testing';

import { FetchFromApiService } from './fetch-from-api.service';

describe('FetchFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFromApiService = TestBed.get(FetchFromApiService);
    expect(service).toBeTruthy();
  });
});
