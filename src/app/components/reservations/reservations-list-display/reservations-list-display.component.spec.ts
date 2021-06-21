import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListDisplayComponent } from './reservations-list-display.component';

describe('ReservationsListDisplayComponent', () => {
  let component: ReservationsListDisplayComponent;
  let fixture: ComponentFixture<ReservationsListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
