"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_detail_component_1 = require("./hero-detail.component");
var heroes_component_1 = require("./heroes.component");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var create_hero_component_1 = require("./create.hero.component");
var routes = [{ path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'dashboard', component: dashboard_component_1.MyDashboardComponent },
    { path: 'createHero', component: create_hero_component_1.createHeroComponent },
    { path: '', component: dashboard_component_1.MyDashboardComponent, pathMatch: 'full' },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }];
var appRoutingModule = (function () {
    function appRoutingModule() {
    }
    return appRoutingModule;
}());
appRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], appRoutingModule);
exports.appRoutingModule = appRoutingModule;
//# sourceMappingURL=app.routing.module.js.map