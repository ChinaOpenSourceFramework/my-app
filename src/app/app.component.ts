import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES : Hero[] = [
    {id:11,name:'Mr.Nice'},
    {id:12,name:'Narco'},
    {id:13,name:'Bombasto'}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero : Hero;
    
    onSelect(hero:Hero):void{
    this.selectedHero=hero;
    }
        
}
