import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { ReservationModel } from './models';
import * as actions from '../actions/reservation.actions';

export interface ReservationState extends EntityState<ReservationModel> {

}

export const adapter = createEntityAdapter<ReservationModel>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.reservationDocumentCreated, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: ReservationState = initialState, action: Action): ReservationState {
  return reducerFunction(state, action);
}



