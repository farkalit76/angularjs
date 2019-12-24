import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetResponseComponent } from './knet-response.component';

describe('KnetResponseComponent', () => {
  let component: KnetResponseComponent;
  let fixture: ComponentFixture<KnetResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
