import { TestBed } from '@angular/core/testing';

import { CharacterByIdService } from './character-by-id.service';

describe('CharacterByIdService', () => {
  let service: CharacterByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
