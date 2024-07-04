import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accepted-reservation',
  templateUrl: './accepted-reservation.component.html',
  styleUrls: ['./accepted-reservation.component.css']
})
export class AcceptedReservationComponent implements OnInit {
  acceptedReservations: any[] = [
    { name: 'John Doe', date: '2024-07-01', details: 'Table for two at 7 PM' },
    { name: 'Jane Smith', date: '2024-07-02', details: 'Table for four at 8 PM' },
    { name: 'Alice Brown', date: '2024-07-03', details: 'Table for six at 7:30 PM' },
    { name: 'Bob Green', date: '2024-07-04', details: 'Table for three at 6:45 PM' },
    { name: 'Mary Johnson', date: '2024-07-05', details: 'Table for two at 7 PM' },
    { name: 'James Williams', date: '2024-07-06', details: 'Table for four at 8 PM' },
    { name: 'Patricia Martinez', date: '2024-07-07', details: 'Table for six at 7:30 PM' },
    { name: 'Michael Hernandez', date: '2024-07-08', details: 'Table for three at 6:45 PM' },
    { name: 'Linda Clark', date: '2024-07-09', details: 'Table for two at 7 PM' },
    { name: 'Robert Lewis', date: '2024-07-10', details: 'Table for four at 8 PM' },
    { name: 'Elizabeth Walker', date: '2024-07-11', details: 'Table for six at 7:30 PM' },
    { name: 'Thomas Hall', date: '2024-07-12', details: 'Table for three at 6:45 PM' },
    { name: 'Barbara Allen', date: '2024-07-13', details: 'Table for two at 7 PM' },
    { name: 'Daniel Young', date: '2024-07-14', details: 'Table for four at 8 PM' },
    { name: 'Susan King', date: '2024-07-15', details: 'Table for six at 7:30 PM' },
    { name: 'Christopher Wright', date: '2024-07-16', details: 'Table for three at 6:45 PM' },
    { name: 'Margaret Scott', date: '2024-07-17', details: 'Table for two at 7 PM' },
    { name: 'Matthew Adams', date: '2024-07-18', details: 'Table for four at 8 PM' },
    { name: 'Nancy Baker', date: '2024-07-19', details: 'Table for six at 7:30 PM' },
    { name: 'Anthony Gonzalez', date: '2024-07-20', details: 'Table for three at 6:45 PM' },
    { name: 'Karen Mitchell', date: '2024-07-21', details: 'Table for two at 7 PM' },
    { name: 'Donald Perez', date: '2024-07-22', details: 'Table for four at 8 PM' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
