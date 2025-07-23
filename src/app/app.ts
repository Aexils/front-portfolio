import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoreDockComponent} from './core/components/dock/dock.component';
import {CoreMenuBarComponent} from './core/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreDockComponent, CoreMenuBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front-portfolio';
}
