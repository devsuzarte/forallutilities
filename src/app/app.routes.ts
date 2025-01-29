import { Routes } from '@angular/router';
import { TimeComponent } from './pages/time/time.component';
import { HomeComponent } from './pages/home/home.component';
import { NotesComponent } from './pages/notes/notes.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "timers", component: TimeComponent },
    { path: "notes", component: NotesComponent }
];
