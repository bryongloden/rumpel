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
var services_1 = require('../../services');
var AuthComponent = (function () {
    function AuthComponent(_route, router, _hat, _authSvc) {
        this._route = _route;
        this.router = router;
        this._hat = _hat;
        this._authSvc = _authSvc;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Authenticating... Please hold.';
        this._subAuth = this._authSvc.auth$.subscribe(function (isAuthorised) {
            if (isAuthorised)
                _this.router.navigate(['']);
            else
                _this.message = 'Unfortunately authentication failed. Please contact your system administrator.';
        });
        this._subRoute = this._route.params.subscribe(function (params) {
            var jwtToken = params['jwt'];
            _this._authSvc.authenticate(jwtToken);
        });
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        this._subRoute.unsubscribe();
        this._subAuth.unsubscribe();
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-auth',
            templateUrl: 'auth.component.html',
            styleUrls: ['auth.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, services_1.HatApiService, services_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map