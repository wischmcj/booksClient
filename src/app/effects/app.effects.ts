import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';
import * as appActions from '../actions/app.actions';
import * as bookActions from '../actions/book.actions';



@Injectable()
export class AppEffects {

  loadBooksOnStartup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => bookActions.loadBooksRequested())
    )

  )

  constructor(private actions$: Actions) { }

}
