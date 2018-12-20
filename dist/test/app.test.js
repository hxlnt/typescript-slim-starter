"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
describe('Greeter', () => {
    var testGreeter;
    beforeEach(function () {
        testGreeter = new app_1.default();
    });
    describe('byName', () => {
        it('should greet you by name', () => {
            const result = testGreeter.byName("Rae");
            if (result !== "Hi, Rae.") {
                throw new Error('Expected "Hi, Rae." but was ' + result);
            }
        });
    });
    describe('byNameLength', () => {
        it('should greet you by the number of letters in name', () => {
            const result = testGreeter.byNameLength("Rae");
            if (result !== "Hi, person with 3 letters in their name.") {
                throw new Error('Expected "Hi, person with 3 letters in their name." but was ' + result);
            }
        });
    });
});
//# sourceMappingURL=app.test.js.map