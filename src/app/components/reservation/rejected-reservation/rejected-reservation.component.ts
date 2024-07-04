import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejected-reservation',
  templateUrl: './rejected-reservation.component.html',
  styleUrls: ['./rejected-reservation.component.css']
})
export class RejectedReservationComponent implements OnInit {
  rejectedReservations: any[] = [
    { name: 'Samuel Green', date: '2024-07-04', details: 'Reservation rejected due to incomplete information.' },
    { name: 'Olivia Taylor', date: '2024-07-05', details: 'Reservation rejected because of overlapping bookings.' },
    { name: 'Mia Hernandez', date: '2024-07-06', details: 'Reservation rejected due to unavailability.' },
    { name: 'Jacob Martinez', date: '2024-07-07', details: 'Reservation rejected because of double booking.' },
    { name: 'Sophia Brown', date: '2024-07-08', details: 'Reservation rejected due to invalid contact details.' },
    { name: 'Liam Thompson', date: '2024-07-09', details: 'Reservation rejected because of late submission.' },
    { name: 'Emma White', date: '2024-07-10', details: 'Reservation rejected due to conflicting events.' },
    { name: 'Noah Lopez', date: '2024-07-11', details: 'Reservation rejected because of venue closure.' },
    { name: 'Isabella Gonzalez', date: '2024-07-12', details: 'Reservation rejected due to policy violation.' },
    { name: 'Mason Allen', date: '2024-07-13', details: 'Reservation rejected because of insufficient information.' },
    { name: 'Ava Young', date: '2024-07-14', details: 'Reservation rejected due to prior cancellations.' },
    { name: 'William Scott', date: '2024-07-15', details: 'Reservation rejected because of duplicate booking.' },
    { name: 'James Adams', date: '2024-07-16', details: 'Reservation rejected due to unavailable time slot.' },
    { name: 'Charlotte King', date: '2024-07-17', details: 'Reservation rejected because of maintenance issues.' },
    { name: 'Benjamin Hill', date: '2024-07-18', details: 'Reservation rejected due to incorrect reservation details.' },
    { name: 'Amelia Moore', date: '2024-07-19', details: 'Reservation rejected because of incomplete payment.' },
    { name: 'Lucas Lee', date: '2024-07-20', details: 'Reservation rejected due to system error.' },
    { name: 'Elijah Wilson', date: '2024-07-21', details: 'Reservation rejected because of overbooking.' },
    { name: 'Ella Clark', date: '2024-07-22', details: 'Reservation rejected due to venue renovation.' },
    { name: 'Logan Lewis', date: '2024-07-23', details: 'Reservation rejected because of administrative reasons.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }
}
