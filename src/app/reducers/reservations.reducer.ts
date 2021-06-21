import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';
import { ReservationModel } from './models';


export interface ReservationState extends EntityState<ReservationModel> {

}

export const adapter = createEntityAdapter<ReservationModel>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ReservationState = initialState, action: Action): ReservationState {
  return reducerFunction(state, action);
}



