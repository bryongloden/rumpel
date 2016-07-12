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
var http_1 = require('@angular/http');
var MarketSquareService = (function () {
    function MarketSquareService(http) {
        this.http = http;
        this.baseUrl = 'https://marketsquare.hubofallthings.com/api';
        this._headers = new http_1.Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    MarketSquareService.prototype.getOffer = function () {
        var url = this.baseUrl + '/offers';
        return this.http.get(url, { headers: this._headers })
            .map(function (res) { return res.json(); })
            .map(function (offers) { return offers.sort(function (a, b) { return b.offer.rating.up - a.offer.rating.up; }); });
    };
    MarketSquareService.prototype.getDataPlugs = function () {
        var url = this.baseUrl + '/dataplugs';
        return this.http.get(url, { headers: this._headers })
            .map(function (res) { return res.json(); });
    };
    MarketSquareService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MarketSquareService);
    return MarketSquareService;
}());
exports.MarketSquareService = MarketSquareService;
//# sourceMappingURL=market-square.service.js.map