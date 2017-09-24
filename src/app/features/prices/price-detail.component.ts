import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../services/location.service';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css'],
  providers:[LocationService]
})
export class PriceDetailComponent implements OnInit {

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
  }

  gbclick(){
    this._locationService.goBack();
  }
}
