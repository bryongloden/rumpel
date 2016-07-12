"use strict";
var auth_guard_1 = require('../auth.guard');
var index_1 = require('./index');
exports.ViewsRoutes = [
    { path: 'profile', component: index_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'social', component: index_1.SocialComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'locations', component: index_1.LocationsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'calendar', component: index_1.CalendarComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'photos', component: index_1.PhotosComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'mixpad', component: index_1.MixpadComponent, canActivate: [auth_guard_1.AuthGuard] }
];
//# sourceMappingURL=views.routes.js.map