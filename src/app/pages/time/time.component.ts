import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StopwatchComponent } from '../../components/stopwatch/stopwatch.component';

@Component({
  selector: 'app-time',
  imports: [NavbarComponent, StopwatchComponent],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent {

}
