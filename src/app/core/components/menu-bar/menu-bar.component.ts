import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-core-menu-bar',
  imports: [
    DatePipe
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class CoreMenuBarComponent implements OnInit {
  date: number = Date.now();
  ngOnInit(): void {
      setInterval(() => {
        this.date = Date.now();
      }, 1000)
  }
}
