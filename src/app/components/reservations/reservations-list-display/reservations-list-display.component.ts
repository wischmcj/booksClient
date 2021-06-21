import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/viewmodels/reservations';

@Component({
  selector: 'app-reservations-list-display',
  templateUrl: './reservations-list-display.component.html',
  styleUrls: ['./reservations-list-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationsListDisplayComponent implements OnInit {

  @Input() list!: ReservationItem[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
