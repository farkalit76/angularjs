import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetPayComponent } from './knet-pay.component';

describe('KnetPayComponent', () => {
  let component: KnetPayComponent;
  let fixture: ComponentFixture<KnetPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
