export interface Reservation {
    _id: string;
    name: string;
    date: Date;
    details: string;
    status: 'accepted' | 'rejected'; // New property
  }
  