import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
   return this.http.get('http://localhost:3000/catalog/authors');
  }


  constructor(private http:  HttpClient) { }
}
