import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmePublicationsComponent } from './confirme-publications.component';

describe('ConfirmePublicationsComponent', () => {
  let component: ConfirmePublicationsComponent;
  let fixture: ComponentFixture<ConfirmePublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmePublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
