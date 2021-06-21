import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as actions from '../actions/reservation.actions';
import { ReservationModel } from "../reducers/models";

@Injectable()
export class ReservationEffects {

  private fakeId = 1;
  createReservationDocument$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reservationRequested),
      map(a => a.payload),
      map(created => {
        return {
          ...created,
          id: 'TEMP' + this.fakeId++,
          status: 'Waiting'
        } as ReservationModel
      }),
      map(payload => actions.reservationDocumentCreated({ payload }))
    )

  )

  constructor(private actions$: Actions) { }
}
