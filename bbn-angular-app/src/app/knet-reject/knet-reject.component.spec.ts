import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetRejectComponent } from './knet-reject.component';

describe('KnetRejectComponent', () => {
  let component: KnetRejectComponent;
  let fixture: ComponentFixture<KnetRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
