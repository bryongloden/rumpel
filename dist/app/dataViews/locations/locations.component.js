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
var map_component_1 = require('../map/map.component');
var services_1 = require('../../services');
var LocationsComponent = (function () {
    function LocationsComponent(_locationsSvc, sanitizer) {
        this._locationsSvc = _locationsSvc;
        this.sanitizer = sanitizer;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.locations$ = this._locationsSvc.showAll();
        this.safeSize = this.sanitizer.bypassSecurityTrustStyle('85vh');
    };
    LocationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-locations',
            templateUrl: 'locations.component.html',
            styleUrls: ['locations.component.css'],
            directives: [map_component_1.MapComponent]
        }), 
        __metadata('design:paramtypes', [services_1.LocationsService, platform_browser_1.DomSanitizationService])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=locations.component.js.map