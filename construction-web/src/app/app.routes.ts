import { Routes } from '@angular/router';
import { SummaryComponent } from './features/summary/summary.component';
import { DeatilComponent } from './features/deatil/deatil.component';

export const routes: Routes = [
     { path: '', component: SummaryComponent },
    { path: 'detail/:index', component: DeatilComponent }
];
