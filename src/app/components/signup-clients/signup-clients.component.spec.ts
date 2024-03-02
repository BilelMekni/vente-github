import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClientsComponent } from './signup-clients.component';

describe('SignupClientsComponent', () => {
  let component: SignupClientsComponent;
  let fixture: ComponentFixture<SignupClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
