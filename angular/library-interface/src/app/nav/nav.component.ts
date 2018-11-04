import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private authorService;
  private authors;
  
  constructor(author:AuthorsService) {
    this.authorService = author;
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    }, err => {
      console.log(err)
      return err;
    });
   }

  ngOnInit() {
  }

}
