import {Component} from '@angular/core';
import {AppsInterface} from '../../interfaces/apps.interface';

@Component({
  selector: 'app-core-dock',
  imports: [],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class CoreDockComponent {
  apps: AppsInterface[] = [
    {
      'name': 'Réglages',
      'icon': 'settings'
    },
    {
      'name': 'Études',
      'icon': 'school'
    },
  ]
}
