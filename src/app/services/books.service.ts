import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BooksModel } from "../reducers/books.reducer";


@Injectable()
export class BooksService {

  // TODO: Change this to call the API
  getBooks(): Observable<BooksModel[]> {
    return of([
      { id: '1', title: 'Redux 4 Life', author: 'Jones' },
      { id: '2', title: 'Angular for N00bs', author: 'Brown' }
    ])
  }

  constructor(private http: HttpClient) { }
}
