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
var map_component_1 = require('../map/map.component');
var timeline_component_1 = require('../timeline/timeline.component');
var view_by_day_component_1 = require('../view-by-day/view-by-day.component');
var services_1 = require('../../services');
var filter_by_time_pipe_1 = require('../../pipes/filter-by-time.pipe');
var moment = require('moment');
var MixpadComponent = (function () {
    function MixpadComponent(locationsSvc, eventsSvc, imagesSvc, sanitizer) {
        this.locationsSvc = locationsSvc;
        this.eventsSvc = eventsSvc;
        this.imagesSvc = imagesSvc;
        this.sanitizer = sanitizer;
        this.timeline = [moment()];
        this.events = [];
        this.images = [];
        this.shownComponents = { map: true, events: true, photos: true, timeline: true };
    }
    MixpadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locations$ = this.locationsSvc.showAll().subscribe(function (locations) {
            _this.locations = locations;
        });
        this.eventSub = this.eventsSvc.showAll().subscribe(function (events) {
            var _loop_1 = function(event_1) {
                var dayFound = _this.timeline.find(function (day) { return day.isSame(event_1.start, 'day'); });
                if (dayFound)
                    return "continue";
                _this.timeline.push(event_1.start);
            };
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_1 = events_1[_i];
                var state_1 = _loop_1(event_1);
                if (state_1 === "continue") continue;
            }
            _this.events = events;
        });
        // this.imgSub = this.imagesSvc.images$.subscribe(images => {
        //   for (let img of images) {
        //     const dayFound = this.timeline.find(day => day.isSame(img.start, 'day'));
        //     if (dayFound) continue;
        //     this.timeline.push(img.start);
        //   }
        //   this.images = images;
        // });
        // this.imagesSvc.loadAll();
        this.safeSize = this.sanitizer.bypassSecurityTrustStyle('85vh');
    };
    MixpadComponent.prototype.onViewReset = function () {
        this.selectedTime = null;
    };
    MixpadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-mixpad',
            templateUrl: 'mixpad.component.html',
            styleUrls: ['mixpad.component.css'],
            directives: [map_component_1.MapComponent, timeline_component_1.TimelineComponent, view_by_day_component_1.ViewByDayComponent],
            pipes: [filter_by_time_pipe_1.FilterByTime]
        }), 
        __metadata('design:paramtypes', [services_1.LocationsService, services_1.EventsService, services_1.ImagesService, platform_browser_1.DomSanitizationService])
    ], MixpadComponent);
    return MixpadComponent;
}());
exports.MixpadComponent = MixpadComponent;
//# sourceMappingURL=mixpad.component.js.map