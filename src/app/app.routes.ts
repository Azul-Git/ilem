//manually created for routes
import {RouterModule, Routes} from '@angular/router';

import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
import { FeaturesComponent } from'././features/features.component';
//path:'' ==> '': default component
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path:'features', component: FeaturesComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
