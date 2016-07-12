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
var platform_browser_1 = require('@angular/platform-browser');
var photo_grid_component_1 = require('../photo-grid/photo-grid.component');
var services_1 = require('../../services');
var moment_pipe_1 = require('../../pipes/moment.pipe');
var PhotosComponent = (function () {
    function PhotosComponent(_imageSvc, _sanitizer) {
        this._imageSvc = _imageSvc;
        this._sanitizer = _sanitizer;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = [];
        this._sub = this._imageSvc.images$.subscribe(function (image) {
            image.url = _this._sanitizer.bypassSecurityTrustUrl(image.url);
            _this.images.push(image);
        });
        this._imageSvc.loadAll();
    };
    PhotosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-photos',
            templateUrl: 'photos.component.html',
            styleUrls: ['photos.component.css'],
            directives: [photo_grid_component_1.PhotoGridComponent],
            pipes: [moment_pipe_1.Moment]
        }), 
        __metadata('design:paramtypes', [services_1.ImagesService, platform_browser_1.DomSanitizationService])
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map