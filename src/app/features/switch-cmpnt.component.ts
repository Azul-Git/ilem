import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DevelopmentComponent } from '../features/development/development.component';
import { TrainingComponent } from '../features/training/training.component';
import { MaintenanceComponent } from '../features/maintenance/maintenance.component';


@Component({
  selector: 'app-switch-cmpnt',
  entryComponents:[DevelopmentComponent, MaintenanceComponent, TrainingComponent],
  template:`<div #dynamicComponent></div>`
})
export class SwitchCmpntComponent implements OnInit {

  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('dynamicComponent', {read: ViewContainerRef}) myVar: ViewContainerRef;
  currentComponent : any;

  @Input() set selectedComponent(componentName: any){
    if(!componentName) return;
    let factory = this.resolver.resolveComponentFactory(componentName);
    let component = this.myVar.createComponent(factory)
    if(this.currentComponent) this.currentComponent.destroy();
    this.currentComponent = component;
  }

  ngOnInit() {
  }

}
