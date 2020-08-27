import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  imageUrl = 'https://www.rnib.org.uk/sites/default/files/Books-702x400px.jpg';
  searchText;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  searchFun() {
    this.router.navigate(['/books'], { queryParams: { searchText: this.searchText, startIndex: 0, maxResults: 8 } });
  }
}
