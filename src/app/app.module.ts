import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { BodyComponent } from './body.component';
import { routing } from'./app.routes';
import { FeaturesComponent } from './features/features.component';
import { PricesComponent } from './features/prices/prices.component';
import { DevelopmentComponent } from './features/development/development.component';
import { TrainingComponent } from './features/training/training.component';
import { MaintenanceComponent } from './features/maintenance/maintenance.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    BodyComponent,
    FeaturesComponent,
    PricesComponent,
    DevelopmentComponent,
    TrainingComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
