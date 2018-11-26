import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { PubsubService } from '../pubsub.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        console.log(this.pubsub.name);
        this.pubsub.Stream.next(hero);
    }

    constructor(private pubsub: PubsubService) {
        this.pubsub.name='sai';
    }


    ngOnInit() {

    }

}
