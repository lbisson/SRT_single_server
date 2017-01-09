import { Component } from '@angular/core';
import { PredictionService } from './predictions/prediction.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PredictionService]
})
export class AppComponent {

}
