import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: any[] = [
    { _id: '1', name: 'John Doe', date: '2024-07-04', details: 'Table for two at 7 PM' },
    { _id: '2', name: 'Jane Smith', date: '2024-07-04', details: 'Table for four at 8 PM' },
    { _id: '3', name: 'Alice Brown', date: '2024-07-04', details: 'Table for six at 7:30 PM' },
    { _id: '4', name: 'Bob Green', date: '2024-07-04', details: 'Table for three at 6:45 PM' },
    { _id: '5', name: 'Chris White', date: '2024-07-04', details: 'Table for two at 6 PM' },
    { _id: '6', name: 'Diana Blue', date: '2024-07-04', details: 'Table for four at 7 PM' },
    { _id: '7', name: 'Ethan Black', date: '2024-07-04', details: 'Table for six at 8 PM' },
    { _id: '8', name: 'Fiona Brown', date: '2024-07-04', details: 'Table for three at 7 PM' },
    { _id: '9', name: 'George Yellow', date: '2024-07-04', details: 'Table for two at 8:30 PM' },
    { _id: '10', name: 'Hannah Red', date: '2024-07-04', details: 'Table for four at 6:30 PM' },
    { _id: '11', name: 'Ian Pink', date: '2024-07-04', details: 'Table for two at 7:15 PM' },
    { _id: '12', name: 'Jessica Violet', date: '2024-07-04', details: 'Table for four at 8 PM' },
    { _id: '13', name: 'Kevin Orange', date: '2024-07-04', details: 'Table for six at 7 PM' },
    { _id: '14', name: 'Laura Green', date: '2024-07-04', details: 'Table for three at 8 PM' },
    { _id: '15', name: 'Michael Blue', date: '2024-07-04', details: 'Table for two at 6:45 PM' },
    { _id: '16', name: 'Nina Black', date: '2024-07-04', details: 'Table for four at 7:30 PM' },
    { _id: '17', name: 'Oscar White', date: '2024-07-04', details: 'Table for six at 8 PM' },
    { _id: '18', name: 'Paula Gray', date: '2024-07-04', details: 'Table for three at 7 PM' },
    { _id: '19', name: 'Quincy Pink', date: '2024-07-04', details: 'Table for two at 6 PM' },
    { _id: '20', name: 'Rachel Blue', date: '2024-07-04', details: 'Table for four at 8 PM' }
  ];

  private acceptedReservations: any[] = [];
  private rejectedReservations: any[] = [];

  constructor() {}

  getReservations(): Observable<any[]> {
    return of(this.reservations);
  }

  acceptReservation(id: string): Observable<void> {
    const reservation = this.reservations.find(res => res._id === id);
    if (reservation) {
      this.acceptedReservations.push(reservation);
      this.removeReservation(id);
    }
    return of(); // Mock successful response
  }

  rejectReservation(id: string, reason: string): Observable<void> {
    const reservation = this.reservations.find(res => res._id === id);
    if (reservation) {
      reservation.reason = reason;
      this.rejectedReservations.push(reservation);
      this.removeReservation(id);
    }
    return of(); // Mock successful response
  }

  getAcceptedReservations(): Observable<any[]> {
    return of(this.acceptedReservations);
  }

  getRejectedReservations(): Observable<any[]> {
    return of(this.rejectedReservations);
  }

  private removeReservation(id: string): void {
    this.reservations = this.reservations.filter(res => res._id !== id);
  }
}
