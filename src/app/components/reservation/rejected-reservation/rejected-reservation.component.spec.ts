import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedReservationComponent } from './rejected-reservation.component';

describe('RejectedReservationComponent', () => {
  let component: RejectedReservationComponent;
  let fixture: ComponentFixture<RejectedReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedReservationComponent]
    });
    fixture = TestBed.createComponent(RejectedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
