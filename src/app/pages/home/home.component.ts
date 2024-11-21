import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { TextComponent } from './text/text.component';
import { matDownload } from '@ng-icons/material-icons/baseline';
import { CircleComponent } from './circle/circle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, TextComponent, CircleComponent],
  viewProviders: [provideIcons({matDownload})],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
