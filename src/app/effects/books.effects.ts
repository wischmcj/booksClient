import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../services/books.service";
import * as actions from '../actions/book.actions';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadBooksRequested),
      mergeMap(() => this.service.getBooks().pipe(
        map(payload => actions.loadBooksSucceeded({ payload }))
      ))
    )

  )

  constructor(private actions$: Actions, private service: BooksService) { }
}
