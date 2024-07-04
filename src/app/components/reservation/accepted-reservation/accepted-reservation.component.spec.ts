import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedReservationComponent } from './accepted-reservation.component';

describe('AcceptedReservationComponent', () => {
  let component: AcceptedReservationComponent;
  let fixture: ComponentFixture<AcceptedReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedReservationComponent]
    });
    fixture = TestBed.createComponent(AcceptedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
