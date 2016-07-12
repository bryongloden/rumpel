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
var MapComponent = (function () {
    function MapComponent() {
        this.timeSelected = new core_1.EventEmitter();
        this.markers = L.markerClusterGroup();
        this.bbox = {
            minLng: 180,
            maxLng: -180,
            minLat: 180,
            maxLat: -180
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
            ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,';
        this.map = L.map('map-view', { zoomControl: false }).setView([51.5074, 0.1278], 10);
        var map = this.map;
        setTimeout(function () { map.invalidateSize(); }, 400);
        L.tileLayer(osmUrl, { attribution: osmAttrib, minZoom: 3, maxZoom: 18 }).addTo(this.map);
    };
    MapComponent.prototype.ngOnChanges = function () {
        if (this.map)
            this.updateMap(this.locations);
    };
    MapComponent.prototype.updateMap = function (locations) {
        if (locations.length <= 0)
            return;
        this.drawMarkers(locations);
        this.map.fitBounds([
            [this.bbox.minLat, this.bbox.minLng],
            [this.bbox.maxLat, this.bbox.maxLng]
        ]);
    };
    MapComponent.prototype.resetBoundingBox = function () {
        this.bbox.minLat = 180;
        this.bbox.maxLat = -180;
        this.bbox.minLng = 180;
        this.bbox.maxLng = -180;
    };
    MapComponent.prototype.ajustBoundingBox = function (lat, lng) {
        this.bbox.minLat = Math.min(this.bbox.minLat, lat);
        this.bbox.maxLat = Math.max(this.bbox.maxLat, lat);
        this.bbox.minLng = Math.min(this.bbox.minLng, lng);
        this.bbox.maxLng = Math.max(this.bbox.maxLng, lng);
    };
    MapComponent.prototype.drawMarkers = function (locations) {
        this.map.removeLayer(this.markers);
        this.markers = L.markerClusterGroup();
        this.resetBoundingBox();
        var _loop_1 = function(loc) {
            this_1.ajustBoundingBox(loc.latitude, loc.longitude);
            var pos = new L.LatLng(loc.latitude, loc.longitude);
            var marker = L.marker(pos);
            marker.timestamp = loc.start;
            var self_1 = this_1;
            marker.on('click', function (e) {
                self_1.onMarkerSelected(e);
            });
            this_1.markers.addLayer(marker);
        };
        var this_1 = this;
        for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
            var loc = locations_1[_i];
            _loop_1(loc);
        }
        this.map.addLayer(this.markers);
    };
    MapComponent.prototype.onMarkerSelected = function (e) {
        this.timeSelected.emit(e.target.timestamp);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "locations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MapComponent.prototype, "mapSize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "timeSelected", void 0);
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-map',
            templateUrl: 'map.component.html',
            styleUrls: ['map.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map