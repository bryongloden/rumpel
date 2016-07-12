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
var services_1 = require('../../services');
var TileProfileComponent = (function () {
    function TileProfileComponent(profileSvc) {
        this.profileSvc = profileSvc;
    }
    TileProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSvc.getFullProfile().subscribe(function (profile) {
            if (profile)
                _this.profile = profile;
        });
        this.profile = {
            private: 'true',
            fb_profile_photo: { private: true },
            personal: { title: '', first_name: '', middle_name: '',
                last_name: '', preferred_name: '', private: true },
            nick: { name: '', private: true },
            birth: { date: '', private: true },
            gender: { type: '', private: true },
            age: { group: '', private: true },
            primary_email: { value: '', private: true },
            alternative_email: { value: '', private: true },
            home_phone: { no: '', private: true },
            mobile: { no: '', private: true },
            address_details: { no: '', street: '', postcode: '', private: true },
            address_global: { city: '', county: '', country: '', private: true },
            website: { link: '', private: true },
            blog: { link: '', private: true },
            facebook: { link: '', private: true },
            linkedin: { link: '', private: true },
            twitter: { link: '', private: true },
            google: { link: '', private: true },
            youtube: { link: '', private: true },
            emergency_contact: { first_name: '', last_name: '', mobile: '',
                relationship: '', private: true },
            about: { title: '', body: '', private: true }
        };
    };
    TileProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-tile-profile',
            templateUrl: 'tile-profile.component.html',
            styleUrls: ['tile-profile.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.ProfileService])
    ], TileProfileComponent);
    return TileProfileComponent;
}());
exports.TileProfileComponent = TileProfileComponent;
//# sourceMappingURL=tile-profile.component.js.map