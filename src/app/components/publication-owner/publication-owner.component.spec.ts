import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationOwnerComponent } from './publication-owner.component';

describe('PublicationOwnerComponent', () => {
  let component: PublicationOwnerComponent;
  let fixture: ComponentFixture<PublicationOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
