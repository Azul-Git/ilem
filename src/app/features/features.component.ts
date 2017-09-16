import { Component, OnInit } from '@angular/core';
import { LocationService } from'../location.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features_text = " what we know and can do with developement";

  constructor() { }

  ngOnInit() {
  }

}
