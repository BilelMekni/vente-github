import { TestBed } from '@angular/core/testing';

import { UpdResponseService } from './upd-response.service';

describe('UpdResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdResponseService = TestBed.get(UpdResponseService);
    expect(service).toBeTruthy();
  });
});
