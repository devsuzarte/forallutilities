import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [NgIf],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  
  hour: any = "0" + 0;
  min: any = "0" + 0;
  sec: any = "0" + 0;
  ms: any = "0" + 0;

  startTimer: any;
  running = false;
  
  /*** Inicia o cronometro e altera para o botão de pause ***/
  start() {
    if(!this.running) {
      this.running = true;

      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? "0" + this.ms : this.ms;

        if(this.ms === 100) {
          this.sec++
          this.sec = this.sec < 10 ? "0" + this.sec : this.sec;

          this.ms = "0" + 0;
        }
        
        if(this.sec === 60) {
          this.min++
          this.min = this.min < 10 ? "0" + this.min : this.min;

          this.sec = "0" + 0;
        }
        
        if(this.min === 60) {
          this.hour++
          this.hour = this.hour < 10 ? "0" + this.hour : this.hour;

          this.min = "0" + 0;
        }
      }, 10)
    } else {
      this.pause()
    }
  }

  //*** Pausa o cronometro e altera para o botão de iniciar ***/
  pause() {
    clearInterval(this.startTimer);
    this.running = false;
  }

  /*** Reinicia o cronometro ***/
  reset() {
    this.running = false;
    this.pause()

    this.hour = "0" + 0;
    this.min = "0" + 0;
    this.sec = "0" + 0;
    this.ms = "0" + 0;
  }
}
