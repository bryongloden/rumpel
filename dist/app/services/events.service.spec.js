"use strict";
var testing_1 = require('@angular/core/testing');
var events_service_1 = require('./events.service');
testing_1.describe('Events Service', function () {
    testing_1.beforeEachProviders(function () { return [events_service_1.EventsService]; });
    testing_1.it('should ...', testing_1.inject([events_service_1.EventsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=events.service.spec.js.map