"use strict";
var index_1 = require('./index');
var auth_guard_1 = require('../auth.guard');
exports.TransactionsRoutes = [
    { path: 'dataDebit/:uuid/confirm', component: index_1.DataDebitConfirmComponent, canActivate: [auth_guard_1.AuthGuard] }
];
//# sourceMappingURL=transactions.routes.js.map