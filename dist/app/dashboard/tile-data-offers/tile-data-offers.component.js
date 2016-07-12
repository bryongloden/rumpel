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
var TileDataOffersComponent = (function () {
    function TileDataOffersComponent(market) {
        this.market = market;
    }
    TileDataOffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.market.getOffer().subscribe(function (offers) { return _this.offers = offers; });
    };
    TileDataOffersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-data-offers',
            templateUrl: 'tile-data-offers.component.html',
            styleUrls: ['tile-data-offers.component.css'],
            pipes: [pipes_1.LimitContentPipe, pipes_1.Moment]
        }), 
        __metadata('design:paramtypes', [services_1.MarketSquareService])
    ], TileDataOffersComponent);
    return TileDataOffersComponent;
}());
exports.TileDataOffersComponent = TileDataOffersComponent;
//# sourceMappingURL=tile-data-offers.component.js.map