import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Prediction } from "./prediction.model";

@Injectable()
export class PredictionService {
    private predictions: Prediction[] = [];

    constructor(private http: Http) {}

    getPredictions() {
        return this.http.get('http://localhost:3000/prediction')
            .map((response: Response) => {
                const predictions = response.json().predictions;
                let transformedPredictions: Prediction[] = [];
                for (let prediction of predictions) {
                    transformedPredictions.push(new Prediction(
                      prediction.solNum,
                      prediction.title,
                      prediction.url,
                      prediction.predictions,
                      prediction.reviewRec,
                      prediction.isReadable,
                      prediction.eitLikelihood,
                      prediction.agency,
                      prediction.office,
                      prediction.contact,
                      prediction.position,
                      prediction.reviewStatus));
                }
                this.predictions = transformedPredictions;
                return transformedPredictions;
            });
    }

}
