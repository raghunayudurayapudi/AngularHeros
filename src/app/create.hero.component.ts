import {Component} from '@angular/core';
import {HeroService} from './Hero.Service'
@Component({
    selector:'create-hero',
    templateUrl:'./create.hero.component.html',
    styleUrls:['./create.hero.component.css']
})
export class createHeroComponent{
    constructor( private heroservice:HeroService){}
    onSubmit(f:any){
        console.log(f);
        this.heroservice.insertHero(f);
    }   
}