"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero_Service_1 = require("./Hero.Service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.goToCreate = function () {
        this.router.navigate(['/createHero'], { relativeTo: this.route });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}<h1>\n    <a routerLink='/heroes'>Heroes</a>\n    <a routerLink='dashboard'>Dashboard</a>\n    <a (click)='goToCreate()'>Create Hero</a>\n    <router-outlet></router-outlet>\n    ",
        styles: ["h1{\n            font-size:1em;\n    }"],
        providers: [Hero_Service_1.HeroService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map