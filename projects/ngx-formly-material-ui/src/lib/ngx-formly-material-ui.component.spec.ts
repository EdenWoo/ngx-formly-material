import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormlyMaterialUiComponent } from './ngx-formly-material-ui.component';

describe('NgxFormlyMaterialUiComponent', () => {
  let component: NgxFormlyMaterialUiComponent;
  let fixture: ComponentFixture<NgxFormlyMaterialUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormlyMaterialUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormlyMaterialUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
