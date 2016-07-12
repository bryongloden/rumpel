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
var moment = require('moment');
var SocialService = (function () {
    function SocialService(hat) {
        var _this = this;
        this.hat = hat;
        this.store = { posts: [] };
        this.socialFeed$ = new Rx_1.Observable(function (observer) { return _this.socialObserver = observer; }).share();
    }
    SocialService.prototype.showAll = function () {
        var _this = this;
        if (this.store.posts.length > 0) {
            console.log('Inside social if');
            return Rx_1.Observable.of(this.store.posts);
        }
        this.loadAll().subscribe(function (data) {
            _this.store.posts = data;
            _this.socialObserver.next(_this.store.posts);
        }, function (err) { return console.log("Posts table could not be found."); });
        return this.socialFeed$;
    };
    SocialService.prototype.loadAll = function () {
        var _this = this;
        return this.loadFrom('facebook').map(function (posts) { return posts.map(_this.fbMap); });
    };
    SocialService.prototype.loadFrom = function (source) {
        return this.hat.getAllValuesOf('posts', source);
    };
    SocialService.prototype.fbMap = function (post) {
        return {
            title: post.name,
            body: post.message,
            start: moment(post.created_time),
            type: post.type,
            image: post.full_picture,
            privacy: post.privacy.description,
            source: 'facebook'
        };
    };
    SocialService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [hat_api_service_1.HatApiService])
    ], SocialService);
    return SocialService;
}());
exports.SocialService = SocialService;
//# sourceMappingURL=social.service.js.map