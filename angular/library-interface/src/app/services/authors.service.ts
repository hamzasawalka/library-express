import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
   return this.http.get('http://localhost:3000/catalog/authors');
  }

  getAuthor(id) {
    return this.http.get('http://localhost:3000/catalog/author/' + id);
  }


  constructor(private http:  HttpClient) { }
}
