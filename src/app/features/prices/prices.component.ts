import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../location.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  providers: [LocationService]
})
export class PricesComponent implements OnInit {

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
  }

  gbclick(){
    this._locationService.goBack();
  }
}
