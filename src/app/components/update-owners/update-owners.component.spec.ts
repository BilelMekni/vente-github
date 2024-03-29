import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwnersComponent } from './update-owners.component';

describe('UpdateOwnersComponent', () => {
  let component: UpdateOwnersComponent;
  let fixture: ComponentFixture<UpdateOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
