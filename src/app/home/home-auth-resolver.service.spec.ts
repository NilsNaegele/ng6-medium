import { TestBed } from '@angular/core/testing';

import { HomeAuthResolverService } from './home-auth-resolver.service';

describe('HomeAuthResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAuthResolverService = TestBed.get(HomeAuthResolverService);
    expect(service).toBeTruthy();
  });
});
