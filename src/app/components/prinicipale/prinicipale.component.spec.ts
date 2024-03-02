import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinicipaleComponent } from './prinicipale.component';

describe('PrinicipaleComponent', () => {
  let component: PrinicipaleComponent;
  let fixture: ComponentFixture<PrinicipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinicipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinicipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
