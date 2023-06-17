import { TestBed } from '@angular/core/testing';

import { CvReaderService } from './cv-reader.service';

describe('CvReaderService', () => {
  let service: CvReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
