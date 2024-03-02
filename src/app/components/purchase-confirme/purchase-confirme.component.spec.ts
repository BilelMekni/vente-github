import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseConfirmeComponent } from './purchase-confirme.component';

describe('PurchaseConfirmeComponent', () => {
  let component: PurchaseConfirmeComponent;
  let fixture: ComponentFixture<PurchaseConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
