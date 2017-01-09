import { Routes, RouterModule } from "@angular/router";

import { PredictionsComponent } from "./predictions/predictions.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/predictions', pathMatch: 'full' },
    { path: 'predictions', component: PredictionsComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
