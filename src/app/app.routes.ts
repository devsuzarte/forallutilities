import { Routes } from '@angular/router';
import { TimeComponent } from './pages/time/time.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "timers", component: TimeComponent },
    { path: "", component: HomeComponent }
];
