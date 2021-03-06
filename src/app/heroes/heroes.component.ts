import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero : Hero;
    
    constructor(private router: Router, private heroService: HeroService) { }
    
    getHeroes():void {
        this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes);
    }
    
    ngOnInit():void {
        this.getHeroes();
    }
    
    onSelect(hero:Hero):void{
    this.selectedHero=hero;
    }
    
    gotoDetail():void {
       this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
