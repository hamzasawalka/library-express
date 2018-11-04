import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorsService } from '../services/authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  
  public authors;

  
  

  constructor( author:AuthorsService) {
   }

  ngOnInit() {
    this.authors.getAuthors().subscribe(data => {
      this.authors = data;
    }, err => {
      console.log(err)
      return err;
    });

  }

}
