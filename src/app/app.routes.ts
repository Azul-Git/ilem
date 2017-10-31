//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
import { PricesComponent } from'././features/prices/prices.component';
import { PriceDetailComponent } from'././features/prices/price-detail.component';

//path:'' ==> '': default component
const APP_ROUTES: Routes = [
  { path:'home', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path:'features', children:[
    { path:'prices', children:[
      { path:'', component: PricesComponent },
      { path:'price-detail', component: PriceDetailComponent }
    ]},
    { path:'', component: FeaturesComponent },
    { path: '',  redirectTo: 'features', pathMatch: 'full' },
    { path: '**', redirectTo: 'features', pathMatch: 'full' },
  ]},
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
