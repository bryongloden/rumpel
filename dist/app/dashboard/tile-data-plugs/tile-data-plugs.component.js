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
var TileDataPlugsComponent = (function () {
    function TileDataPlugsComponent(marketSvc, auth) {
        this.marketSvc = marketSvc;
        this.auth = auth;
    }
    TileDataPlugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketSvc.getDataPlugs().subscribe(function (plugs) { return _this.plugs = plugs; });
        this.icons = ['FB-f-Logo__blue_144.png', 'photos-plug.svg', 'calendar-plug.svg', 'rumpel.svg', 'locations-plug.svg'];
        this.hatDomain = this.auth.getDomain();
    };
    TileDataPlugsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-data-plugs',
            templateUrl: 'tile-data-plugs.component.html',
            styleUrls: ['tile-data-plugs.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.MarketSquareService, services_1.AuthService])
    ], TileDataPlugsComponent);
    return TileDataPlugsComponent;
}());
exports.TileDataPlugsComponent = TileDataPlugsComponent;
//# sourceMappingURL=tile-data-plugs.component.js.map