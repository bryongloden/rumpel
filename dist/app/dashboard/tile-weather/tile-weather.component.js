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
var weather_service_1 = require('../../services/weather.service');
var moment = require('moment');
var TileWeatherComponent = (function () {
    function TileWeatherComponent(weatherSvc) {
        this.weatherSvc = weatherSvc;
    }
    TileWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherSvc.getCurrentWeather('UK', 'London').subscribe(function (currentw) {
            _this.icon = currentw.weather.replace(new RegExp(' ', 'g'), '').toLowerCase();
            if (_this.icon === 'haze' || _this.icon === 'clear')
                _this.icon = 'cloud';
            _this.city = currentw.display_location.full;
            _this.temp = currentw.temp_c;
            _this.description = currentw.weather;
            _this.feelsLike = currentw.feelslike_c;
            _this.lastUpdated = moment.unix(currentw.observation_epoch).fromNow();
        }, function (err) { return console.log('Weather data could not be retrieved', err); });
    };
    TileWeatherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-weather',
            templateUrl: 'tile-weather.component.html',
            styleUrls: ['tile-weather.component.css'],
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], TileWeatherComponent);
    return TileWeatherComponent;
}());
exports.TileWeatherComponent = TileWeatherComponent;
//# sourceMappingURL=tile-weather.component.js.map