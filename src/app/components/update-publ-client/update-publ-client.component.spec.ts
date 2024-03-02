import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublClientComponent } from './update-publ-client.component';

describe('UpdatePublClientComponent', () => {
  let component: UpdatePublClientComponent;
  let fixture: ComponentFixture<UpdatePublClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePublClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePublClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
