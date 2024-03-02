import { TestBed } from '@angular/core/testing';

import { UpdPublicationsService } from './upd-publications.service';

describe('UpdPublicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdPublicationsService = TestBed.get(UpdPublicationsService);
    expect(service).toBeTruthy();
  });
});
