import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matDownload } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({matDownload})],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css'
})
export class CircleComponent {

}
