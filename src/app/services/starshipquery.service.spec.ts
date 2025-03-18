import { TestBed } from '@angular/core/testing';

import { StarshipqueryService } from './starshipquery.service';

describe('StarshipqueryService', () => {
  let service: StarshipqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
