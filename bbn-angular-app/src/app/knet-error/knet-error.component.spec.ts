import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnetErrorComponent } from './knet-error.component';

describe('KnetErrorComponent', () => {
  let component: KnetErrorComponent;
  let fixture: ComponentFixture<KnetErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnetErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnetErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
