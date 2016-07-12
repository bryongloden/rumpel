/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var weather_service_1 = require('./weather.service');
testing_1.describe('Weather Service', function () {
    testing_1.beforeEachProviders(function () { return [weather_service_1.WeatherService]; });
    testing_1.it('should ...', testing_1.inject([weather_service_1.WeatherService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=weather.service.spec.js.map