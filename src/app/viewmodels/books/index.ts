
export interface BookListItem {
  id: string;
  title: string;
  author: string;
}

export interface ReservationCreate {
  for: string;
  books: string[]
}
