import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetHistoryComponent } from './knet-history.component';

describe('KnetHistoryComponent', () => {
  let component: KnetHistoryComponent;
  let fixture: ComponentFixture<KnetHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
