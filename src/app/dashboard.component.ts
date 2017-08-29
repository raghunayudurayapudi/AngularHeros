import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import{HeroService} from './Hero.Service';
@Component({
    selector:'my-dashboard',
    templateUrl:'./myDashboard.component.html',
    styles:[`.col-1-4{ 
            width:20%;
            display:inline-block;
            padding:10px;
            background-color:#888;
            margin:1em;
            cusrsor:pointer;
     }`]
})

export class MyDashboardComponent implements OnInit{
    constructor(private heroService:HeroService){}
    heroes:Hero[];
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.heroService.getHeros().then((data)=>{this.heroes=data.slice(0,5)});
    }
}