import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsConfirmeComponent } from './products-confirme.component';

describe('ProductsConfirmeComponent', () => {
  let component: ProductsConfirmeComponent;
  let fixture: ComponentFixture<ProductsConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
