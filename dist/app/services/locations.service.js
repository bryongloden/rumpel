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
var Rx_1 = require('rxjs/Rx');
var hat_api_service_1 = require('./hat-api.service');
var events_service_1 = require('./events.service');
var images_service_1 = require('./images.service');
var moment = require('moment');
var LocationsService = (function () {
    function LocationsService(hat, _eventsSvc, _imagesSvc) {
        var _this = this;
        this.hat = hat;
        this._eventsSvc = _eventsSvc;
        this._imagesSvc = _imagesSvc;
        this.store = { locations: [] };
        this.locations$ = new Rx_1.Observable(function (observer) { return _this.locationsObserver = observer; }).share();
    }
    LocationsService.prototype.showAll = function () {
        var _this = this;
        if (this.store.locations.length > 0) {
            console.log('Inside locations if');
            return Rx_1.Observable.of(this.store.locations);
        }
        this.loadAll().subscribe(function (data) {
            _this.store.locations = data;
            _this.locationsObserver.next(_this.store.locations);
        }, function (err) { return console.log("Locations table could not be found"); });
        return this.locations$;
    };
    LocationsService.prototype.loadAll = function () {
        var _this = this;
        return this.loadFrom('iphone').map(function (locations) { return locations.map(_this.locMap); });
    };
    LocationsService.prototype.loadFrom = function (source) {
        return this.hat.getAllValuesOf('locations', source);
    };
    LocationsService.prototype.locMap = function (location) {
        return {
            latitude: location.latitude,
            longitude: location.longitude,
            accuracy: null,
            start: moment(parseInt(location.timestampMs))
        };
    };
    LocationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [hat_api_service_1.HatApiService, events_service_1.EventsService, images_service_1.ImagesService])
    ], LocationsService);
    return LocationsService;
}());
exports.LocationsService = LocationsService;
//# sourceMappingURL=locations.service.js.map