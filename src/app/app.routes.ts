//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
import { PricesComponent } from'././features/prices/prices.component';
import { PriceDetailComponent } from'././features/prices/price-detail.component';
import { DevelopmentComponent } from'././features/development/development.component';
import { TrainingComponent } from'././features/training/training.component';
import { MaintenanceComponent } from'././features/maintenance/maintenance.component';

// path:'' ==> '': default component
const APP_ROUTES = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'features', component: FeaturesComponent,
    children: [
      {path:'development', component: DevelopmentComponent},
      {path:'', redirectTo:'development', pathMatch: 'full'},
      {path:'training', component: TrainingComponent},
      {path:'maintenance', component: MaintenanceComponent}

    ]
  },
  {path:'prices',
    children: [
      { path:'', component: PricesComponent },
      { path:'priceDetail', component: PriceDetailComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
