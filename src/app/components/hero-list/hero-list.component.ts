import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

import { Router } from '@angular/router'; 

@Component({
  selector: 'toh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService : HeroService, private router : Router) { 
    
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes);
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
