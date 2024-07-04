import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptationReservationComponent } from './acceptation-reservation.component';

describe('AcceptationReservationComponent', () => {
  let component: AcceptationReservationComponent;
  let fixture: ComponentFixture<AcceptationReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptationReservationComponent]
    });
    fixture = TestBed.createComponent(AcceptationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
