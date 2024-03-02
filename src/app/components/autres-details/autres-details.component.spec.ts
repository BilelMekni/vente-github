import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresDetailsComponent } from './autres-details.component';

describe('AutresDetailsComponent', () => {
  let component: AutresDetailsComponent;
  let fixture: ComponentFixture<AutresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
