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
var SideMenuComponent = (function () {
    function SideMenuComponent() {
        this.menuItems = [
            { display: 'Dashboard', icon: 'dashboard', link: '' },
            { display: 'Profile', icon: 'user', link: 'profile' },
            //{ display: 'Offers', icon: 'tags', link: '' },
            { display: 'Mashup', icon: 'layergroup', link: 'mixpad' },
            //{ display: 'Messages', icon: 'chats', link: '' },
            { display: 'Locations', icon: 'tags', link: 'locations' },
            { display: 'Calendar', icon: 'calendar', link: 'calendar' },
            { display: 'Social', icon: 'replyall', link: 'social' },
            //{ display: 'Mail', icon: 'send', link: '' },
            { display: 'Photos', icon: 'camera', link: 'photos' }
        ];
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent.prototype.onItemSelect = function (itemName) {
        this.selectedItem = itemName;
    };
    SideMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rump-side-menu',
            templateUrl: 'side-menu.component.html',
            styleUrls: ['side-menu.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
exports.SideMenuComponent = SideMenuComponent;
//# sourceMappingURL=side-menu.component.js.map