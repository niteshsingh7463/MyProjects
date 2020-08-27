
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  gridBool = true;
  listBool = false;
  galleryBool = false;

  constructor() { }

  ngOnInit() {
  }
  view(n) {
    switch (n) {
      case 1:
        this.gridBool = false;
        this.listBool = true;
        this.galleryBool = false;
        break;
      case 2:

        this.gridBool = true;
        this.listBool = false;
        this.galleryBool = false;
        break;

      case 3:

        this.gridBool = false;
        this.listBool = false;
        this.galleryBool = true;
        break;
    }
  }
}
