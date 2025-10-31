import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { CatnavigationComponent } from './component/catnavigation/catnavigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CatnavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'estore';
}
