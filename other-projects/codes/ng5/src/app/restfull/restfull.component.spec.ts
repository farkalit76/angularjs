import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfullComponent } from './restfull.component';

describe('RestfullComponent', () => {
  let component: RestfullComponent;
  let fixture: ComponentFixture<RestfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
