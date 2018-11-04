import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {


  public authors;
  public authorSwitch = 0;

  public authorService;

  public clickedAuthorId;
  public authorDetails;

  toggleAuthors() {
    this.authorSwitch == 0 ? this.authorSwitch = 1 : this.authorSwitch = 0;
  }

  getAuthorId(id) {
    this.clickedAuthorId = id;
    this.getAuthorDetails(id);
  }

  getAuthorDetails(id) {
    this.authorService.getAuthor(id).subscribe(data => {
      this.authorDetails = data; console.log(data);
    }, err => {
      console.log(err)
      return err;
    });
  }

  constructor(author: AuthorsService) {
    this.authorService = author;

    this.authorDetails = {
      "_id": "",
      "first_name": "",
      "family_name": "",
      "date_of_birth": "",
      "date_of_death": "",
      "__v": 0
    };
  }



ngOnInit() {
  this.authorService.getAuthors().subscribe(data => {
    this.authors = data;
  }, err => {
    console.log(err)
    return err;
  });

}

}
