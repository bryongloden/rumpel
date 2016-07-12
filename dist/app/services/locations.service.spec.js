"use strict";
var testing_1 = require('@angular/core/testing');
var locations_service_1 = require('./locations.service');
testing_1.describe('Locations Service', function () {
    testing_1.beforeEachProviders(function () { return [locations_service_1.LocationsService]; });
    testing_1.it('should ...', testing_1.inject([locations_service_1.LocationsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=locations.service.spec.js.map