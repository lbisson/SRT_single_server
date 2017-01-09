import { Component, OnInit } from "@angular/core";

import { Prediction } from "./prediction.model";
import { PredictionService } from "./prediction.service";

@Component({
    selector: 'my-prediction-list',
    templateUrl: './prediction-list.component.html'
})
export class PredictionListComponent implements OnInit {
    predictions: Prediction[];
    title: "Section 508 Compliance Dashboard"

    constructor(private predictionService: PredictionService) {}

    ngOnInit() {
        this.predictionService.getPredictions()
            .subscribe(
                (predictions: Prediction[]) => {
                    this.predictions = predictions;
                }
            );
    }
}
