import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectBookListViewModel } from 'src/app/reducers';
import { BookListItem } from 'src/app/viewmodels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$!: Observable<BookListItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select(selectBookListViewModel);
  }

}
