import { BookListItem } from "../books";

export interface ReservationItem {
  id: string;
  books: BookListItem[]
  for: string;
  status: string;
}
