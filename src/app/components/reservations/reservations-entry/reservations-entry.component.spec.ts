import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsEntryComponent } from './reservations-entry.component';

describe('ReservationsEntryComponent', () => {
  let component: ReservationsEntryComponent;
  let fixture: ComponentFixture<ReservationsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
