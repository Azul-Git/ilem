import { Component, OnInit } from '@angular/core';
import { LocationService } from'../../services/location.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  providers: [LocationService]
})
export class MaintenanceComponent implements OnInit {

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
  }

  gbclick(){
    this._locationService.goBack();
  }

}
