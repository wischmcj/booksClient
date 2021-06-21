import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectBookListViewModel } from 'src/app/reducers';
import { atLeastOneEntryInFormArray, triggerValidationOn } from 'src/app/validators/forms';
import { BookListItem, ReservationCreate } from 'src/app/viewmodels/books';
import { reservationRequested } from '../../../actions/reservation.actions';
@Component({
  selector: 'app-reservations-entry',
  templateUrl: './reservations-entry.component.html',
  styleUrls: ['./reservations-entry.component.css']
})
export class ReservationsEntryComponent implements OnInit {

  books$!: Observable<BookListItem[]>;
  form = this.formBuilder.group({
    for: ['', [Validators.required]],
    books: new FormArray([])
  });

  get for() { return this.form.get('for'); }
  get books() { return this.form.get('books') as FormArray; }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select(selectBookListViewModel);
    this.books.setValidators(atLeastOneEntryInFormArray(1));
  }
  onCheckChanged(e: unknown) {
    const checkArray: FormArray = this.form.get('books') as FormArray;
    const check = e as { target: { checked: boolean, value: string } };

    if (check.target.checked) {
      checkArray.push(new FormControl(check.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value === check.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  checked(id: string) {
    return this.books?.controls?.some(i => i.value === id);
  }
  submit(foci: HTMLInputElement) {
    if (this.form.valid) {
      const payload: ReservationCreate = {
        for: this.for?.value,
        books: this.books.value
      };
      this.store.dispatch(reservationRequested({ payload }))

      this.books?.clear();

      this.form.reset();
      foci.focus();
    } else {
      triggerValidationOn(this.form);
    }
  }
}


