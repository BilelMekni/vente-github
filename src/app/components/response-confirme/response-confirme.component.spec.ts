import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseConfirmeComponent } from './response-confirme.component';

describe('ResponseConfirmeComponent', () => {
  let component: ResponseConfirmeComponent;
  let fixture: ComponentFixture<ResponseConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
