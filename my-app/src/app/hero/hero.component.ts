import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

    @Input() hero: Hero;
    constructor(private pubsub: PubsubService) {
        this.pubsub.name='sairam';
    }

    ngOnInit() {
        this.pubsub.Stream.subscribe(hero => {
            this.hero=hero;
            console.log(this.pubsub.name);
        });
  }

}
