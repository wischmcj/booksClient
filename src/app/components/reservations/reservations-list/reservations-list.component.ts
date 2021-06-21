import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectLocalReservationsListModel, selectReferenceReservationsListModel } from 'src/app/reducers';
import { ReservationItem } from 'src/app/viewmodels/reservations';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  localReservations$!: Observable<ReservationItem[]>;
  referenceReservations$!: Observable<ReservationItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.localReservations$ = this.store.select(selectLocalReservationsListModel);
    this.referenceReservations$ = this.store.select(selectReferenceReservationsListModel);
  }

}
