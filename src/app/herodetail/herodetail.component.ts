import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-herodetail',
    templateUrl: './herodetail.component.html',
    styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

    hero: Hero;
    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {

    }

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
}

