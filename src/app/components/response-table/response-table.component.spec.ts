import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTableComponent } from './response-table.component';

describe('ResponseTableComponent', () => {
  let component: ResponseTableComponent;
  let fixture: ComponentFixture<ResponseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
