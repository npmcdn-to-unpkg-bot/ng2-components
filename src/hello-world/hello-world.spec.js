"use strict";
var testing_1 = require('@angular/core/testing');
var hello_world_1 = require('./hello-world');
testing_1.describe('HelloWorld', function () {
    var helloWorld;
    testing_1.beforeEach(function () {
        helloWorld = new hello_world_1.HelloWorld();
    });
    testing_1.it('should have a message property', function () {
        testing_1.expect(helloWorld.message).toBe('Click Me ...');
    });
    testing_1.it('should say hello world', function () {
        helloWorld.onClick();
        testing_1.expect(helloWorld.message).toBe('Hello World!');
    });
});
//# sourceMappingURL=hello-world.spec.js.map