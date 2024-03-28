import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BookService } from '../../services/book.service';
import { InterfaceBook } from '../../models/interface-book';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})

export class BookTableComponent implements OnInit {
  books: InterfaceBook[] = [];

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err)
    });
  }
}
