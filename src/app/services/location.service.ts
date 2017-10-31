import { Injectable } from '@angular/core';
import { Location } from'@angular/common';

@Injectable()
export class LocationService {

  path: string;
  component: any;
  constructor(private _location: Location) { }

  goBack(){
    this._location.back();
  }

}
