import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { InterfaceBook } from '../models/interface-book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private readonly URI_BOOKS = "assets/books-mocked.json";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<InterfaceBook[]> {
    return this.http.get<InterfaceBook[]>(this.URI_BOOKS);
  }
}
