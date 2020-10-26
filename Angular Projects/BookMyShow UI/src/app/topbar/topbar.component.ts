import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  city = 'NCR';
  cityArr = ['NCR', 'Ahmedabad', 'Banglore', 'Chennai', 'Mumbai', 'Hyderabad'];
  searchVar = '';
  clickCity(item) {
    this.city = item;
  }
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }
  onEnter() {
    this._router.navigate(['home/' + this.city], {
      relativeTo: this._route,
      queryParams: {
        q: this.searchVar
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      // skipLocationChange: true
      // do not trigger navigation
    });

  }

}
