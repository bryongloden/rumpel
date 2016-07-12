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
var tile_profile_component_1 = require('../tile-profile/tile-profile.component');
var tile_generic_component_1 = require('../tile-generic/tile-generic.component');
var tile_social_component_1 = require('../tile-social/tile-social.component');
var tile_weather_component_1 = require('../tile-weather/tile-weather.component');
var tile_header_component_1 = require('../tile-header/tile-header.component');
var tile_data_offers_component_1 = require('../tile-data-offers/tile-data-offers.component');
var tile_data_plugs_component_1 = require('../tile-data-plugs/tile-data-plugs.component');
var tile_map_component_1 = require('../tile-map/tile-map.component');
var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-grid',
            templateUrl: 'grid.component.html',
            styleUrls: ['grid.component.css'],
            directives: [tile_profile_component_1.TileProfileComponent, tile_generic_component_1.TileGenericComponent, tile_social_component_1.TileSocialComponent, tile_weather_component_1.TileWeatherComponent, tile_header_component_1.TileHeaderComponent, tile_data_offers_component_1.TileDataOffersComponent, tile_data_plugs_component_1.TileDataPlugsComponent, tile_map_component_1.TileMapComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map