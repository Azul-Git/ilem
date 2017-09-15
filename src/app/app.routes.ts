//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
import { PricesComponent } from'././features/prices/prices.component';
//path:'' ==> '': default component
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path:'features', component: FeaturesComponent},
  { path:'prices', component: PricesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
