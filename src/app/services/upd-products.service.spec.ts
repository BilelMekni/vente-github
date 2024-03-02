import { TestBed } from '@angular/core/testing';

import { UpdProductsService } from './upd-products.service';

describe('UpdProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdProductsService = TestBed.get(UpdProductsService);
    expect(service).toBeTruthy();
  });
});
