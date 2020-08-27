import { NetServiceService } from './../net-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  allData: any = {
    items: [{
      "kind": "books#volume",
      "id": "KW0YAAAAYAAJ",
      "etag": "a4Vu7fJZCJ0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/KW0YAAAAYAAJ",
      "volumeInfo": {
        "title": "The Three Musketeers",
        "authors": [
          "Alexandre Dumas"
        ],
        "publishedDate": "1878",
        "description": "One of the preeminent novels by French writer Alexandre Dumas, this swashbuckling tale follows a group of honorable 17th-century swordsmen who must contend with powerful adversaries scheming against the queen. Determined to join the royal guard, young d'Artagnan leaves his country home and travels to Paris, where he unintentionally angers Aramis, Athos, and Porthos, the esteemed Three Musketeers. Eventually winning the trust and admiration of the formidable trio of fighters, d'Artagnan joins them in their quest to thwart the plans of the sinister Cardinal Richelieu.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "HARVARD:HN2IDW"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 492,
        "printType": "BOOK",
        "categories": [
          "France"
        ],
        "averageRating": 4,
        "ratingsCount": 603,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.4.10.0.full.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=KW0YAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=KW0YAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=KW0YAAAAYAAJ&printsec=frontcover&dq=Three+Musketeers&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=KW0YAAAAYAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=KW0YAAAAYAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=KW0YAAAAYAAJ&rdid=book-KW0YAAAAYAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "downloadLink": "http://books.google.co.in/books/download/The_Three_Musketeers.epub?id=KW0YAAAAYAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.co.in/books/download/The_Three_Musketeers.pdf?id=KW0YAAAAYAAJ&hl=&output=pdf&sig=ACfU3U19zfGzWyO6HLnD7KIyPcwoQLcg-Q&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=KW0YAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "One of the preeminent novels by French writer Alexandre Dumas, this swashbuckling tale follows a group of honorable 17th-century swordsmen who must contend with powerful adversaries scheming against the queen."
      }
    }]
  };
  searchText = null;
  startIndex = null;
  endIndex = null;
  maxResults = null;
  prevBool = false;
  languageArr = [{ name: 'English', value: 'en' }, { name: 'French', value: 'fr' }, { name: 'Hindi', value: 'hi' }];
  languageOptStructure = null;

  filterArr = [{ name: 'Full Volume', value: 'full' }, { name: 'Free Google e-books', value: 'free-ebooks' }, { name: 'Paid Google e-books', value: 'paid-ebooks' }];
  filterOptStructure = null;
  endPoint = null;
  allData1 = null;
  count = 0;

  baseApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private route: ActivatedRoute, private netservice: NetServiceService, private router: Router) { }

  ngOnInit() {
    this.makeStructure()
    this.route.queryParamMap.subscribe(params => {
      this.makeStructure();
      this.searchText = params.get('searchText');
      this.startIndex = +params.get('startIndex');
      this.maxResults = +params.get('maxResults');
      this.languageOptStructure.selected = params.get('langRestrict');
      this.filterOptStructure.selected = params.get('filter');
      this.getEndPoint();
      this.constructUrl();

    })

  }
  makeStructure() {
    this.languageOptStructure = { list: this.languageArr, selected: null };
    this.filterOptStructure = { list: this.filterArr, selected: null }
  }
  //=====================================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....
  constructUrl() {

    let path2 = this.baseApiUrl;
    path2 = path2 + this.searchText;
    path2 = path2 + '&startIndex=' + this.startIndex;
    path2 = path2 + '&maxResults=' + this.maxResults;
    if (this.languageOptStructure.selected) { path2 = path2 + '&langRestrict=' + this.languageOptStructure.selected; }
    if (this.filterOptStructure.selected)
      path2 = path2 + '&filter=' + this.filterOptStructure.selected;
    ////////////////////////////////////////////////////////////////
    this.netservice.getData(path2).subscribe(resp => {
      this.getEndPoint();
      this.allData = resp; console.log('path=>>', path2); this.endIndex = 8 + this.startIndex;;
      if (this.endPoint) { if (this.endIndex >= this.endPoint) { this.prevBool = true; this.endIndex = this.endPoint; this.endPoint = null } else { this.prevBool = false } } else { this.prevBool = false };
      // console.log(this.prevBool)
    })


  }
  getEndPoint() {

    let path1 = this.baseApiUrl;
    path1 = path1 + this.searchText;
    path1 = path1 + '&startIndex=' + this.startIndex;
    path1 = path1 + '&maxResults=' + 30;
    if (this.languageOptStructure.selected) {
      path1 = path1 + '&langRestrict=' + this.languageOptStructure.selected;

    }
    if (this.filterOptStructure.selected) {
      path1 = path1 + '&filter=' + this.filterOptStructure.selected;

    }
    // ------------------//
    this.netservice.getData(path1).subscribe(resp2 => { this.allData1 = resp2; if (this.allData1.items.length < 30 && this.count == 0) { this.endPoint = this.allData1.items.length + this.startIndex; this.count = 1; } })
    ////////////////////////////////////////////////////////////////
  }
  pageFun(i) {
    this.startIndex = i * this.maxResults + this.startIndex;

    this.router.navigate(['/books'], { queryParams: { searchText: this.searchText, startIndex: this.startIndex, maxResults: this.maxResults, langRestrict: this.languageOptStructure.selected, filter: this.filterOptStructure.selected } });

  }
  radioChangeFun() {
    this.startIndex = 0;
    this.router.navigate(['/books'], { queryParams: { searchText: this.searchText, startIndex: this.startIndex, maxResults: this.maxResults, langRestrict: this.languageOptStructure.selected, filter: this.filterOptStructure.selected } });
    console.log("language", this.languageOptStructure.selected);
    console.log("filter", this.filterOptStructure.selected);
    this.count = 0;


  }
}
