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
var core_1 = require('@angular/core');
var services_1 = require('../../services');
var pipes_1 = require('../../pipes');
var TileSocialComponent = (function () {
    function TileSocialComponent(socialSvc) {
        this.socialSvc = socialSvc;
    }
    TileSocialComponent.prototype.ngOnInit = function () {
        this.feed$ = this.socialSvc.showAll();
    };
    TileSocialComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-social',
            templateUrl: 'tile-social.component.html',
            styleUrls: ['tile-social.component.css'],
            pipes: [pipes_1.Moment, pipes_1.LimitContentPipe, pipes_1.LimitMembersPipe, pipes_1.ContainsPipe]
        }), 
        __metadata('design:paramtypes', [services_1.SocialService])
    ], TileSocialComponent);
    return TileSocialComponent;
}());
exports.TileSocialComponent = TileSocialComponent;
//# sourceMappingURL=tile-social.component.js.map