import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'toh-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.css']
})
export class SelectedHeroComponent implements OnInit {

  @Input()
  hero : Hero;

  constructor( private heroService : HeroService, private route : ActivatedRoute, private location : Location ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get("id")))
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
