import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly booksService: BooksService
  ) { }

  ngOnInit(): void {
  }

  getBooks (): void {
    this.booksService.getBooks().pipe(take(1)).subscribe(
      (res) => {
        console.log(res)
    })
  }
}
