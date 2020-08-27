import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  options = [
    { name: 'Harry Potter Books', queryParams: { searchText: 'Harry Potter', startIndex: 0, maxResults: 8 } }, { name: 'Books by Agatha Christie', queryParams: { searchText: 'Agatha Christie', startIndex: 0, maxResults: 8 } }, { name: 'Books by Premchand', queryParams: { searchText: 'Premchand', startIndex: 0, maxResults: 8 } }, { name: 'Love Stories by Jane', queryParams: { searchText: 'Jane', startIndex: 0, maxResults: 8 } }, { name: 'Biography on lincoln', queryParams: { searchText: 'lincoln', startIndex: 0, maxResults: 8 } }];
  constructor() { }

  ngOnInit() {
  }

}
