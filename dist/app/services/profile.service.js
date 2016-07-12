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
var hat_api_service_1 = require('./hat-api.service');
var auth_service_1 = require('./auth.service');
var hat_profile_model_1 = require('../shared/hat-profile-model');
var ProfileService = (function () {
    function ProfileService(hat, auth) {
        this.hat = hat;
        this.auth = auth;
    }
    ProfileService.prototype.initializeProfile = function () {
        var _this = this;
        return this.hat.getDataSources()
            .map(function (res) { return res.json(); })
            .flatMap(function (sources) {
            console.log('SRC', sources);
            var profileTable = sources.find(function (source) { return source.name === 'profile' && source.source === 'rumpel'; });
            if (profileTable) {
                return _this.hat.getModelMapping(profileTable.id);
            }
            else {
                return _this.hat.postModel(hat_profile_model_1.hatModel.profile);
            }
        });
    };
    ProfileService.prototype.getFullProfile = function () {
        return this.hat.getAllValuesOf('profile', 'rumpel')
            .map(function (profiles) {
            var sortedProfiles = profiles.sort(function (a, b) {
                return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
            });
            return sortedProfiles[0];
        });
    };
    ProfileService.prototype.getPicture = function () {
        return this.hat.getAllValuesOf('profile_picture', 'facebook')
            .map(function (pictures) {
            var sortedPictures = pictures.sort(function (a, b) {
                return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
            });
            return sortedPictures[0];
        });
    };
    ProfileService.prototype.saveProfile = function (profile, hatIdMapping) {
        return this.hat.postRecord(profile, hatIdMapping, 'profile').map(function (res) { return res.json(); });
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [hat_api_service_1.HatApiService, auth_service_1.AuthService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map