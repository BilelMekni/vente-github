import { TestBed } from '@angular/core/testing';

import { UpdPurchaseService } from './upd-purchase.service';

describe('UpdPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdPurchaseService = TestBed.get(UpdPurchaseService);
    expect(service).toBeTruthy();
  });
});
