import { createAction, props } from "@ngrx/store";
import { BooksModel } from "../reducers/books.reducer";


export const loadBooksRequested = createAction(
  '[books event] load books requested'
);

export const loadBooksSucceeded = createAction(
  '[books command] load books succeeded',
  props<{ payload: BooksModel[] }>()
);
