import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnResponsePurchaseComponent } from './return-response-purchase.component';

describe('ReturnResponsePurchaseComponent', () => {
  let component: ReturnResponsePurchaseComponent;
  let fixture: ComponentFixture<ReturnResponsePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnResponsePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnResponsePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
