import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { BookListItem } from "../viewmodels/books";

import * as fromBooks from './books.reducer';
import * as fromReservations from './reservations.reducer';
import * as fromReservationsLocal from './local-reservations.reducer';
import { ReservationItem } from "../viewmodels/reservations";

export interface AppState {
  books: fromBooks.BooksState;
  reservations: fromReservations.ReservationState,
  reservationsLocal: fromReservationsLocal.ReservationState
}

export const reducers: ActionReducerMap<AppState> = {
  books: fromBooks.reducer,
  reservations: fromReservations.reducer,
  reservationsLocal: fromReservationsLocal.reducer
}


const selectBooksFeature = (state: AppState) => state.books;
const selectReservationsLocalFeature = (state: AppState) => state.reservationsLocal;
const selectReservationsFeature = (state: AppState) => state.reservations;

const { selectAll: selectAllBooksArray, selectEntities: selectBookEntities } = fromBooks.adapter.getSelectors(selectBooksFeature);
const { selectAll: selectAllLocalReservationsArray } = fromReservationsLocal.adapter.getSelectors(selectReservationsLocalFeature);
const { selectAll: selectAllReferenceReservationsArray } = fromReservations.adapter.getSelectors(selectReservationsFeature);

export const selectBookListViewModel = createSelector(
  selectAllBooksArray,
  books => books as BookListItem[]
);


export const selectLocalReservationsListModel = createSelector(
  selectAllLocalReservationsArray,
  selectBookEntities,
  (reservations, books) => reservations.map(reservation => ({
    id: reservation.id,
    for: reservation.for,
    status: reservation.status,
    books: reservation.books.map(id => books[id])
  } as ReservationItem))
)

export const selectReferenceReservationsListModel = createSelector(
  selectAllReferenceReservationsArray,
  selectBookEntities,
  (reservations, books) => reservations.map(reservation => ({
    id: reservation.id,
    for: reservation.for,
    status: reservation.status,
    books: reservation.books.map(id => books[id])
  } as ReservationItem))
)


