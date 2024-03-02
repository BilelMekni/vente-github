import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAchatComponent } from './voir-achat.component';

describe('VoirAchatComponent', () => {
  let component: VoirAchatComponent;
  let fixture: ComponentFixture<VoirAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
