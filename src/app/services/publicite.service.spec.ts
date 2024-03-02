import { TestBed } from '@angular/core/testing';

import { PubliciteService } from './publicite.service';

describe('PubliciteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PubliciteService = TestBed.get(PubliciteService);
    expect(service).toBeTruthy();
  });
});
