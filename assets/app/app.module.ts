import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { PredictionInputComponent } from './predictions/prediction-input.component';
import { PredictionListComponent } from './predictions/prediction-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PredictionsComponent,
    PredictionInputComponent,
    PredictionListComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]

})
export class AppModule {

}
