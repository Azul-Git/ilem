//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
import { PricesComponent } from'././features/prices/prices.component';
import { DevelopmentComponent } from'././features/development/development.component';

//path:'' ==> '': default component
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path:'prices', component: PricesComponent },
  { path:'features', children:[
    { path:'',  component: FeaturesComponent },
    { path:':development', component: DevelopmentComponent}
  ]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
