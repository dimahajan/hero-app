import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PubsubService {
    name:string;
    Stream:Subject;
    constructor(){
        this.Stream = new Subject();
    }
}
