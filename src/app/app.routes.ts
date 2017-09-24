//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
import { PricesComponent } from'././features/prices/prices.component';
import { TrainingComponent } from'././features/training/training.component';
import { MaintenanceComponent } from'././features/maintenance/maintenance.component';
import { DevelopmentComponent } from'././features/development/development.component';
import { PriceDetailComponent } from'././features/prices/price-detail.component';
//path:'' ==> '': default component
const APP_ROUTES: Routes = [
  { path:'home', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path:'features', children:[
  	{ path:'',  component: FeaturesComponent },
    { path:'**', redirectTo: 'features', pathMatch: 'full' },
    { path:'development', component: DevelopmentComponent },
    { path:'maintenance', component: MaintenanceComponent },
    { path:'training', component: TrainingComponent },
    { path:'prices', children:[
      { path:'', component: PricesComponent },
      { path:'price-detail', component: PriceDetailComponent }
    ]}
  ]},
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
