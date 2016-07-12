"use strict";
var testing_1 = require('@angular/core/testing');
var images_service_1 = require('./images.service');
testing_1.describe('Photos Service', function () {
    testing_1.beforeEachProviders(function () { return [images_service_1.ImagesService]; });
    testing_1.it('should ...', testing_1.inject([images_service_1.ImagesService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=images.service.spec.js.map