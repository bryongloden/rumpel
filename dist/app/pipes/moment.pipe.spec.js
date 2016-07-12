"use strict";
var testing_1 = require('@angular/core/testing');
var moment_pipe_1 = require('./moment.pipe');
testing_1.describe('Moment Pipe', function () {
    testing_1.beforeEachProviders(function () { return [moment_pipe_1.Moment]; });
    testing_1.it('should transform the input', testing_1.inject([moment_pipe_1.Moment], function (pipe) {
        testing_1.expect(pipe.transform(true)).toBe(null);
    }));
});
//# sourceMappingURL=moment.pipe.spec.js.map