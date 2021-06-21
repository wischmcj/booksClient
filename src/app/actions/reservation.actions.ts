import { createAction, props } from "@ngrx/store";
import { ReservationModel } from "../reducers/models";

import { ReservationCreate } from "../viewmodels/books";


export const reservationRequested = createAction(
  '[reservation event] reservation submitted',
  props<{ payload: ReservationCreate }>()
);


export const reservationDocumentCreated = createAction(
  '[reservation document] created',
  props<{ payload: ReservationModel }>()
);
