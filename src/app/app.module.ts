import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {HeroDetailComponent} from './hero-detail.component'
import { AppComponent }  from './app.component';
import {HeroesComponent} from './heroes.component'
import {RouterModule} from '@angular/router';
import {MyDashboardComponent} from './dashboard.component'
import {appRoutingModule} from './app.routing.module'
import {createHeroComponent} from './create.hero.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,// <-- import the FormsModule before binding with [(ngModel)]
    appRoutingModule]
 ,
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MyDashboardComponent,
    createHeroComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
