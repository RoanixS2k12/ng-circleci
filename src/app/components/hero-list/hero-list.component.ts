import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'toh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService : HeroService) { 
    
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroesSlowly()
    .then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
