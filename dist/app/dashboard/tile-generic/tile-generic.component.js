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
var TileGenericComponent = (function () {
    function TileGenericComponent(eventsSvc) {
        this.eventsSvc = eventsSvc;
    }
    TileGenericComponent.prototype.ngOnInit = function () {
        this.events$ = this.eventsSvc.showAll();
    };
    TileGenericComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-generic',
            templateUrl: 'tile-generic.component.html',
            styleUrls: ['tile-generic.component.css'],
            pipes: [pipes_1.Moment, pipes_1.LimitMembersPipe]
        }), 
        __metadata('design:paramtypes', [services_1.EventsService])
    ], TileGenericComponent);
    return TileGenericComponent;
}());
exports.TileGenericComponent = TileGenericComponent;
//# sourceMappingURL=tile-generic.component.js.map