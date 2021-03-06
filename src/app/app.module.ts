import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { routing } from'./app.routes';
import {ScrollToModule} from 'ng2-scroll-to';

import { FeaturesComponent } from './features/features.component';
import { PricesComponent } from './features/prices/prices.component';
import { DevelopmentComponent } from './features/development/development.component';
import { TrainingComponent } from './features/training/training.component';
import { MaintenanceComponent } from './features/maintenance/maintenance.component';
import { PriceDetailComponent } from './features/prices/price-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    FeaturesComponent,
    PricesComponent,
    DevelopmentComponent,
    TrainingComponent,
    MaintenanceComponent,
    PriceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
