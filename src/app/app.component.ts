import { Component } from '@angular/core';


import { HeroComponent } from './components/hero/hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <toh-hero-list></toh-hero-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
