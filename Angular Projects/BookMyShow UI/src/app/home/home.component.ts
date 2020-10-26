import { AuthService } from './../auth.service';
import { baseUrl } from './../myData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectLanExp = true;
  formatExp = false;
  genreExp = false;
  city: any = 'NCR';
  myurl = baseUrl;
  lanArr = ['Hindi', 'English', 'Punjabi', 'Tamil'];
  formatArr = ['2D', '3D', '4DX'];
  genreArr = ['Action', 'Adventure', 'Biography', 'Comedy'];
  allData: any = null;
  lanArrStructure = null;
  lanSelected = null;
  formatArrStructure = null;
  formatSelected = null;
  genreArrStructure = null;
  genreSelected = null;

  allSeatDataUrl = 'https://us-central1-bkyow-22da6.cloudfunctions.net/app/seats';
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.topbarBoolFun(1);
    this.route.paramMap.subscribe(res => {
      this.city = res.get('city');
      this.authService.getData(this.allSeatDataUrl).subscribe(data => { this.authService.allSeatData5 = data; console.log('data::', data); console.log('allSeatDataOnHome::>', this.authService.allSeatData5); });

    })
    this.route.queryParamMap.subscribe(resp => {
      this.getData();
      this.lanSelected = resp.get('lang');
      this.formatSelected = resp.get('format');
      this.genreSelected = resp.get('genre');

      // console.log('route works')
      this.updateValues();
    });
  }


  getData() {
    let path = this.myurl + this.router.url.slice(6,);
    console.log('api-path::', path);
    this.authService.getData(path).subscribe(data => this.allData = data);
  }
  change() {
    // console.log("change:::", this.lanArrStructure)
    this.optChange();
    let path = 'home/NCR';

    let queryparamsVar = { lang: this.lanSelected, format: this.formatSelected, genre: this.genreSelected };
    // console.log('queryparam::', queryparamsVar)
    this.router.navigate([path], { queryParams: queryparamsVar });

  }
  updateValues() {
    this.lanUpdateValues();
    this.formatUpdateValues();
    this.genreUpdateValues();
  }

  optChange() {
    this.lanOptChange();
    this.formatOptChange();
    this.genreOptChange();
  }
  // ===========================================================================================================
  lanUpdateValues() {
    this.lanArrStructure = this.lanArr.map(n1 => ({ name: n1, selected: false }));
    if (this.lanSelected) {
      let lanSel = this.lanSelected.split(',');
      for (let i = 0; i < lanSel.length; i++) {
        let item = this.lanArrStructure.find(n1 => n1.name == lanSel[i]);
        if (item) {
          item.selected = true;
        }
      }
    }
  }
  lanOptChange() {
    let lanSel = this.lanArrStructure.filter(n1 => n1.selected);


    // console.log('work', lanSel)
    if (lanSel.length != 0) {
      let lanSelArr = lanSel.map(n1 => n1.name);
      this.lanSelected = lanSelArr.join(',');
    } else { this.lanSelected = null; }
    // console.log('lanSelected::', this.lanSelected)
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ===========================================================================================================
  formatUpdateValues() {
    this.formatArrStructure = this.formatArr.map(n1 => ({ name: n1, selected: false }));
    if (this.formatSelected) {
      let formatSel = this.formatSelected.split(',');
      for (let i = 0; i < formatSel.length; i++) {
        let item = this.formatArrStructure.find(n1 => n1.name == formatSel[i]);
        if (item) {
          item.selected = true;
        }
      } console.log('lan::', this.formatArrStructure)
    }
  }
  formatOptChange() {
    let formatSel = this.formatArrStructure.filter(n1 => n1.selected == true);
    if (formatSel.length != 0) {

      let formatSelArr = formatSel.map(n1 => n1.name);
      this.formatSelected = formatSelArr.join(',');
    } else { this.formatSelected = null; }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ============================================================================================================
  genreUpdateValues() {
    this.genreArrStructure = this.genreArr.map(n1 => ({ name: n1, selected: false }));
    if (this.genreSelected) {
      let genreSel = this.genreSelected.split(',');
      for (let i = 0; i < genreSel.length; i++) {
        let item = this.genreArrStructure.find(n1 => n1.name == genreSel[i]);
        if (item) {
          item.selected = true;
        }
      }
    }
  }
  genreOptChange() {
    let genreSel = this.genreArrStructure.filter(n1 => n1.selected == true);
    if (genreSel.length != 0) {
      let genreSelArr = genreSel.map(n1 => n1.name);
      this.genreSelected = genreSelArr.join(',');

    } else { this.genreSelected = null; }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ============================================================================================================
  genre() { this.genreExp = !this.genreExp; }
  format() { this.formatExp = !this.formatExp; }
  selectLan() { this.selectLanExp = !this.selectLanExp }


  bookingPage(i) {
    this.router.navigate(['bookMovie/' + this.city + '/' + i])
  }


}
