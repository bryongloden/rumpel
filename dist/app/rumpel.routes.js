"use strict";
var router_1 = require('@angular/router');
var transactions_routes_1 = require('./transactions/transactions.routes');
var views_routes_1 = require('./dataViews/views.routes');
var user_mgmt_routes_1 = require('./user-mgmt/user-mgmt.routes');
var dashboard_1 = require('./dashboard');
var auth_guard_1 = require('./auth.guard');
exports.routes = [
    { path: '', component: dashboard_1.GridComponent, canActivate: [auth_guard_1.AuthGuard] }
].concat(user_mgmt_routes_1.UserMgmtRoutes, views_routes_1.ViewsRoutes, transactions_routes_1.TransactionsRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=rumpel.routes.js.map