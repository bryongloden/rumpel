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
var platform_browser_1 = require('@angular/platform-browser');
var services_1 = require('../../services');
var map_component_1 = require('../../dataViews/map/map.component');
var TileMapComponent = (function () {
    function TileMapComponent(sanitizer, locationSvc) {
        this.sanitizer = sanitizer;
        this.locationSvc = locationSvc;
    }
    TileMapComponent.prototype.ngOnInit = function () {
        this.safeSize = this.sanitizer.bypassSecurityTrustStyle('29em');
        this.locations$ = this.locationSvc.showAll();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TileMapComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TileMapComponent.prototype, "iconName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TileMapComponent.prototype, "info", void 0);
    TileMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-map',
            templateUrl: 'tile-map.component.html',
            styleUrls: ['tile-map.component.css'],
            directives: [map_component_1.MapComponent]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService, services_1.LocationsService])
    ], TileMapComponent);
    return TileMapComponent;
}());
exports.TileMapComponent = TileMapComponent;
//# sourceMappingURL=tile-map.component.js.map