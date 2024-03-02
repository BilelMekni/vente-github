import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsClientsTableComponent } from './publications-clients-table.component';

describe('PublicationsClientsTableComponent', () => {
  let component: PublicationsClientsTableComponent;
  let fixture: ComponentFixture<PublicationsClientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsClientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsClientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
