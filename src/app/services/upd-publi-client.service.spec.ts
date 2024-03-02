import { TestBed } from '@angular/core/testing';

import { UpdPubliClientService } from './upd-publi-client.service';

describe('UpdPubliClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdPubliClientService = TestBed.get(UpdPubliClientService);
    expect(service).toBeTruthy();
  });
});
