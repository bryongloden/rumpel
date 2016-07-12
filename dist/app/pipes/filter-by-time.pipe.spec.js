"use strict";
var testing_1 = require('@angular/core/testing');
var filter_by_time_pipe_1 = require('./filter-by-time.pipe');
testing_1.describe('FilterByTime Pipe', function () {
    testing_1.beforeEachProviders(function () { return [filter_by_time_pipe_1.FilterByTime]; });
    testing_1.it('should transform the input', testing_1.inject([filter_by_time_pipe_1.FilterByTime], function (pipe) {
        testing_1.expect(pipe.transform([])).toBe([]);
    }));
});
//# sourceMappingURL=filter-by-time.pipe.spec.js.map