import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getBooks (): Observable<Object> {
    return this.httpClient.get(`/books`, {})
  }
}
