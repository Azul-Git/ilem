import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../services/location.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers: [LocationService]
})
export class TrainingComponent implements OnInit {

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
  }

  gbclick(){
    this._locationService.goBack();
  }

}
