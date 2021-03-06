import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {

  heroes : Hero[];

  constructor() { }

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() : Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    })
  }

  getHero(id : Number) : Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }


}
