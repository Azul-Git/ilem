import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { LocationService } from'../../services/location.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css'],
  providers:[LocationService]
})

export class PriceDetailComponent implements OnInit {

  constructor(private _locationService: LocationService,
              @Inject(DOCUMENT) private document: Document,
            ) { }

  ngOnInit() {
  }

  //call goBack function in LocalService 
  gbclick(){
    this._locationService.goBack();
  }

  //Listen to the scroll action
  @HostListener('window:scroll', ['$event'])
  // display scrolTop button when the page scroll down
  scrollFunction($event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myScrollBtn").style.display = "block";
    } else {
        document.getElementById("myScrollBtn").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  toTopFunction() {
      // document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

}
