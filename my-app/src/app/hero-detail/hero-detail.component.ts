import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { PubsubService } from '../pubsub.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    constructor(private pubsub: PubsubService) {
        this.pubsub.name='ram';
    }

    ngOnInit() {
        this.pubsub.Stream.subscribe(hero => {
            this.hero=hero;
            console.log(this.pubsub.name);
        });
    }
}