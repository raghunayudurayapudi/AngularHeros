import {Component} from '@angular/core';
import {HeroService} from './Hero.Service';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
    selector:'my-app',
    template:`
    <h1>{{title}}<h1>
    <a routerLink='/heroes'>Heroes</a>
    <a routerLink='dashboard'>Dashboard</a>
    <a (click)='goToCreate()'>Create Hero</a>
    <router-outlet></router-outlet>
    `,
    styles:[`h1{
            font-size:1em;
    }`],
    providers:[HeroService]
})
export class AppComponent{
    title:string='Tour of Heroes';
    constructor( private router:Router,private route:ActivatedRoute){}
    goToCreate(){
            this.router.navigate(['/createHero'],{relativeTo:this.route});
    }
}