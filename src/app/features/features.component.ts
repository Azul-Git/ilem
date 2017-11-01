import { Component, OnInit } from '@angular/core';
import { LocationService } from'../services/location.service';
import { DevelopmentComponent } from './development/development.component';
import { TrainingComponent } from './training/training.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  providers: [LocationService]
})
export class FeaturesComponent implements OnInit {

  selectedComponent : any;

  ngOnInit() {
  }
  // selectComponent(option:string){
  //   switch(option){
  //     case "dev": this.selectedComponent = DevelopmentComponent; break;
  //     case "train":  this.selectedComponent = TrainingComponent; break;
  //     case "maint": this.selectedComponent = MaintenanceComponent; break;
  //     default: this.selectedComponent = DevelopmentComponent;
  //   }
  // }


}
