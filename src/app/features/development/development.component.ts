import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../services/location.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  providers: [LocationService]
})
export class DevelopmentComponent implements OnInit {

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
  }

  gbclick(){
    this._locationService.goBack();
  }
}
