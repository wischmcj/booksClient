import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/book.actions';

export interface BooksModel {
  id: string;
  title: string;
  author: string;
}

export interface BooksState extends EntityState<BooksModel> {

}

export const adapter = createEntityAdapter<BooksModel>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadBooksSucceeded, (s, a) => adapter.setAll(a.payload, s))
);

export function reducer(state: BooksState = initialState, action: Action): BooksState {
  return reducerFunction(state, action);
}



