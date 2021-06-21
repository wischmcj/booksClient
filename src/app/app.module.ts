import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BooksComponent } from './components/books/books.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './effects/app.effects';
import { BooksService } from './services/books.service';
import { BookEffects } from './effects/books.effects';
import { ReservationsEntryComponent } from './components/reservations/reservations-entry/reservations-entry.component';
import { ReservationsListComponent } from './components/reservations/reservations-list/reservations-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationEffects } from './effects/reservation.effects';
import { ReservationsListDisplayComponent } from './components/reservations/reservations-list-display/reservations-list-display.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooksComponent,
    ReservationsComponent,
    HomeComponent,
    ReservationsEntryComponent,
    ReservationsListComponent,
    ReservationsListDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects, BookEffects, ReservationEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
