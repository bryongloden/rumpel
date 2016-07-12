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
var moment_pipe_1 = require('../../pipes/moment.pipe');
var ViewByDayComponent = (function () {
    function ViewByDayComponent() {
        this.timeSelected = new core_1.EventEmitter();
        this.visibility = { img: true, eve: true, loc: true };
    }
    ViewByDayComponent.prototype.ngOnInit = function () {
    };
    ViewByDayComponent.prototype.ngOnChanges = function () {
        this.visibility.img = !this.images.length;
        this.visibility.eve = !this.events.length;
        this.visibility.loc = !this.locations;
    };
    ViewByDayComponent.prototype.selectTime = function (day) {
        this.timeSelected.emit(day);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ViewByDayComponent.prototype, "images", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ViewByDayComponent.prototype, "events", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ViewByDayComponent.prototype, "locations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ViewByDayComponent.prototype, "day", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ViewByDayComponent.prototype, "timeSelected", void 0);
    ViewByDayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-view-by-day',
            templateUrl: 'view-by-day.component.html',
            styleUrls: ['view-by-day.component.css'],
            pipes: [moment_pipe_1.Moment]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewByDayComponent);
    return ViewByDayComponent;
}());
exports.ViewByDayComponent = ViewByDayComponent;
//# sourceMappingURL=view-by-day.component.js.map