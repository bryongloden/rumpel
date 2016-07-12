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
var EventsService = (function () {
    function EventsService(_hat) {
        var _this = this;
        this._hat = _hat;
        this.store = { events: [] };
        this.events$ = new Rx_1.Observable(function (observer) { return _this.eventsObserver = observer; }).share();
    }
    EventsService.prototype.showAll = function () {
        var _this = this;
        if (this.store.events.length > 0) {
            console.log('Inside events if');
            return Rx_1.Observable.of(this.store.events);
        }
        this.loadAll().subscribe(function (data) {
            var mergedData = data[0].concat(data[1]);
            _this.store.events = mergedData;
            _this.eventsObserver.next(_this.store.events);
        }, function (err) { return console.log("Events table could not be found."); });
        return this.events$;
    };
    EventsService.prototype.loadAll = function () {
        var _this = this;
        return Rx_1.Observable.forkJoin(this.loadFrom('facebook').map(function (events) { return events.map(_this.fbMap); }), this.loadFrom('ical').map(function (events) { return events.map(_this.icalMap); }));
    };
    EventsService.prototype.loadFrom = function (source) {
        return this._hat.getAllValuesOf('events', source);
    };
    EventsService.prototype.fbMap = function (event) {
        return {
            title: event.name,
            description: event.description,
            start: moment(event.start_time),
            end: event.end_time ? moment(event.end_time) : null,
            source: 'facebook'
        };
    };
    EventsService.prototype.icalMap = function (event) {
        return {
            title: event.summary,
            description: event.description,
            start: moment(event.startDate),
            end: event.endDate ? moment(event.endDate) : null,
            source: 'ical'
        };
    };
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [hat_api_service_1.HatApiService])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map