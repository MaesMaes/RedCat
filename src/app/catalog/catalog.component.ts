import { Component, OnInit } from '@angular/core';
import { Book } from './../models/book';

const BOOKS: Book[] = [
    {id: 1, name: 'Sherlock Holmes 1', author: 'A.C. Doile', category: 'Detective'},
    {id: 2, name: 'Sherlock Holmes 2', author: 'A.C. Doile', category: 'Detective'},
    {id: 3, name: 'Sherlock Holmes 3' , author: 'A.C. Doile', category: 'Detective'},
    {id: 4, name: 'Sherlock Holmes 4', author: 'A.C. Doile', category: 'Detective'},
    {id: 5, name: 'Sherlock Holmes 5', author: 'A.C. Doile', category: 'Detective'},
    {id: 6, name: 'Sherlock Holmes 6', author: 'A.C. Doile', category: 'Detective'},
];

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

    books: Book[] = BOOKS;

    constructor() { }

    ngOnInit() {
    }

    actionLog: string;

    action(id: number, action: string): void {
        this.actionLog = `ID: ${id} Action: ${action}`;
        // console.log(`ID: ${id} Action: ${action}`);
    }
}
