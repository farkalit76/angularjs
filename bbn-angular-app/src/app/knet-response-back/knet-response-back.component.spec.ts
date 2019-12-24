import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetResponseBackComponent } from './knet-response-back.component';

describe('KnetResponseBackComponent', () => {
  let component: KnetResponseBackComponent;
  let fixture: ComponentFixture<KnetResponseBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetResponseBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetResponseBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
