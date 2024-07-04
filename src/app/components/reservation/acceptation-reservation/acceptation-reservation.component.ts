import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-acceptation-reservation',
  templateUrl: './acceptation-reservation.component.html',
  styleUrls: ['./acceptation-reservation.component.css']
})
export class AcceptationReservationComponent implements OnInit {
  reservations: any[] = [];
  selectedReservation: any = null;
  rejectionReason: string = '';
  msgSucc: string = '';
  searchTerm: string = '';  // Add a property to store the search term

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
      },
      (error) => {
        console.error('Error fetching reservations', error);
      }
    );
  }

  filteredReservations(): any[] {
    if (!this.searchTerm) {
      return this.reservations;
    }
    return this.reservations.filter(reservation =>
      reservation.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      reservation.date.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      reservation.details.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectReservationForApproval(reservation: any): void {
    this.selectedReservation = reservation;
    const approveModal = document.getElementById('approveModal');
    if (approveModal) {
      approveModal.classList.add('show');
      approveModal.style.display = 'block';
    }
  }

  approveReservation(): void {
    if (this.selectedReservation) {
      this.reservationService.acceptReservation(this.selectedReservation._id).subscribe(
        () => {
          this.msgSucc = 'Reservation approved successfully';
          this.fetchReservations(); // Refresh the list after approval
          this.closeModals(); // Close modals after approval
        },
        (error) => {
          console.error('Error approving reservation', error);
        }
      );
    }
  }

  selectReservationForRejection(reservation: any): void {
    this.selectedReservation = reservation;
    const rejectModal = document.getElementById('rejectModal');
    if (rejectModal) {
      rejectModal.classList.add('show');
      rejectModal.style.display = 'block';
    }
  }

  confirmRejectReservation(): void {
    const rejectModal = document.getElementById('rejectModal');
    const confirmRejectModal = document.getElementById('confirmRejectModal');
    if (rejectModal && confirmRejectModal) {
      rejectModal.style.display = 'none';
      confirmRejectModal.classList.add('show');
      confirmRejectModal.style.display = 'block';
    }
  }

  rejectReservation(): void {
    if (this.selectedReservation) {
      this.reservationService.rejectReservation(this.selectedReservation._id, this.rejectionReason).subscribe(
        () => {
          this.msgSucc = 'Reservation rejected successfully';
          this.fetchReservations(); // Refresh the list after rejection
          this.closeModals(); // Close modals after rejection
        },
        (error) => {
          console.error('Error rejecting reservation', error);
        }
      );
    }
  }

  closeModals(): void {
    const approveModal = document.getElementById('approveModal');
    const rejectModal = document.getElementById('rejectModal');
    const confirmRejectModal = document.getElementById('confirmRejectModal');
    if (approveModal) {
      approveModal.style.display = 'none';
    }
    if (rejectModal) {
      rejectModal.style.display = 'none';
    }
    if (confirmRejectModal) {
      confirmRejectModal.style.display = 'none';
    }
  }
}
