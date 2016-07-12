"use strict";
var testing_1 = require('@angular/core/testing');
var rumpel_component_1 = require('../app/rumpel.component');
testing_1.beforeEachProviders(function () { return [rumpel_component_1.RumpelAppComponent]; });
testing_1.describe('App: Rumpel2', function () {
    testing_1.it('should create the app', testing_1.inject([rumpel_component_1.RumpelAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'rumpel2 works!\'', testing_1.inject([rumpel_component_1.RumpelAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('rumpel2 works!');
    }));
});
//# sourceMappingURL=rumpel.component.spec.js.map