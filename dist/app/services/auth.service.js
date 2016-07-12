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
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var Rx_1 = require('rxjs/Rx');
var hat_api_service_1 = require('./hat-api.service');
var AuthService = (function () {
    function AuthService(hat, router) {
        var _this = this;
        this.hat = hat;
        this.router = router;
        this.auth$ = new Rx_1.Observable(function (observer) { return _this.authObserver = observer; }).share();
        this.authenticated = false;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    AuthService.prototype.decodeJwt = function (jwt) {
        var jwtData = this.jwtHelper.decodeToken(jwt);
        var issuer = jwtData['iss'];
        return issuer;
    };
    AuthService.prototype.tryPreviousToken = function () {
        var storedToken = localStorage.getItem('hatat');
        if (storedToken && (!this.jwtHelper.isTokenExpired(storedToken))) {
            this.router.navigate(['users/authenticate/' + storedToken]);
        }
        else {
            this.router.navigate(['users/login']);
        }
    };
    AuthService.prototype.authenticate = function (jwt) {
        var _this = this;
        var hatDomain = this.decodeJwt(jwt);
        this.hatDomain = hatDomain;
        this.hat.validateToken(hatDomain, jwt).subscribe(function (res) {
            if (res && res.message === 'Authenticated') {
                _this.authenticated = true;
                localStorage.setItem('hatat', jwt);
            }
            else {
                _this.authenticated = false;
                localStorage.removeItem('hatat');
            }
        }, function (err) {
            _this.authenticated = false;
            console.log("Could not verify with specified HAT");
            _this.authObserver.next(_this.authenticated);
        }, function () {
            if (_this.authObserver)
                _this.authObserver.next(_this.authenticated);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.getDomain = function () {
        return this.hatDomain;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [hat_api_service_1.HatApiService, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map