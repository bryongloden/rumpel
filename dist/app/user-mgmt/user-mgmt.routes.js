"use strict";
var index_1 = require('./index');
exports.UserMgmtRoutes = [
    { path: 'users/login', component: index_1.LoginComponent },
    { path: 'users/authenticate/:jwt', component: index_1.AuthComponent }
];
//# sourceMappingURL=user-mgmt.routes.js.map