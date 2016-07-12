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
var moment_pipe_1 = require('../../pipes/moment.pipe');
var DataDebitConfirmComponent = (function () {
    function DataDebitConfirmComponent(_route, _ddSvc, _hat) {
        this._route = _route;
        this._ddSvc = _ddSvc;
        this._hat = _hat;
    }
    DataDebitConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offerInfo = {
            offer: {
                title: '',
                description: '',
                starts: '',
                expires: '',
                dataRequest: { definition: [] },
                reward: { vendor: '', rewardType: '', value: '' }
            },
            owner: { firstName: '', lastName: '', email: '' }
        };
        this._route.params.subscribe(function (params) {
            var uuid = params['uuid'];
            _this._uuid = uuid;
            _this._ddSvc.loadOffer(_this._uuid).subscribe(function (info) {
                _this.offerInfo = info[0];
            });
        });
    };
    DataDebitConfirmComponent.prototype.acceptDataDebit = function () {
        this._hat.updateDataDebit(this._uuid, 'enable');
    };
    DataDebitConfirmComponent.prototype.rejectDataDebit = function () {
        this._hat.updateDataDebit(this._uuid, 'disable');
    };
    DataDebitConfirmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-data-debit-confirm',
            templateUrl: 'data-debit-confirm.component.html',
            styleUrls: ['data-debit-confirm.component.css'],
            pipes: [moment_pipe_1.Moment]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, services_1.DataDebitService, services_1.HatApiService])
    ], DataDebitConfirmComponent);
    return DataDebitConfirmComponent;
}());
exports.DataDebitConfirmComponent = DataDebitConfirmComponent;
//# sourceMappingURL=data-debit-confirm.component.js.map