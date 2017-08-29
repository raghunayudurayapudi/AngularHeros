import { Component, Input , OnInit } from '@angular/core';
import {HeroService} from './Hero.Service'
import { Hero } from './hero';
import {ActivatedRoute,ParamMap,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
@Component({
 selector: 'hero-detail',
 templateUrl: "./hero-detail.component.html",
 styles:['']
})
export class HeroDetailComponent implements OnInit {
    hero:Hero;
constructor(private heroService:HeroService,private route:ActivatedRoute,private location:Location){}
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    // .subscribe(hero => this.hero = hero);
    this.route.params.subscribe((params:Params)=>{
    let y = this.heroService.getHero(+params.id);
    console.log(+params.id);
    y.then(data=>{this.hero=data});
});
    
}
goBack(){
  this.location.back();
}
}