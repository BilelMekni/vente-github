import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOwnerComponent } from './information-owner.component';

describe('InformationOwnerComponent', () => {
  let component: InformationOwnerComponent;
  let fixture: ComponentFixture<InformationOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
