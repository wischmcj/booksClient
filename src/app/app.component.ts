import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { applicationStarted } from './actions/app.actions';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-client';

  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
