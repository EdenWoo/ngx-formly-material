import { TestBed } from '@angular/core/testing';

import { NgxFormlyMaterialUiService } from './ngx-formly-material-ui.service';

describe('NgxFormlyMaterialUiService', () => {
  let service: NgxFormlyMaterialUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormlyMaterialUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
