import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDetailComponent} from './hero-detail.component'
import { AppComponent }  from './app.component';
import {HeroesComponent} from './heroes.component'
import {RouterModule} from '@angular/router';
import {MyDashboardComponent} from './dashboard.component';
import {createHeroComponent} from './create.hero.component';
const routes= [{path:'heroes',component:HeroesComponent},
{path:'dashboard',component:MyDashboardComponent},
{path:'createHero',component:createHeroComponent},
{path:'',component:MyDashboardComponent,pathMatch:'full'},
{  path:'detail/:id',component:HeroDetailComponent}];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class appRoutingModule{
    
}