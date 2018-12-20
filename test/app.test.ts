import Greeter from '../src/app';

describe('Greeter', () => {

    let testGreeter: Greeter;
    beforeEach(() => {
        testGreeter = new Greeter();
    });

    describe('byName', () => {
        it('should greet you by name', () => {
            const result: string = testGreeter.byName('Rae');
            if (result !== 'Hi, Rae.') {
                throw new Error('Expected "Hi, Rae." but was ' + result);
            }
        });
    });

    describe('byNameLength', () => {
        it('should greet you by the number of letters in name', () => {
            const result: string = testGreeter.byNameLength('Rae');
            if (result !== 'Hi, person with 3 letters in their name.') {
                throw new Error('Expected "Hi, person with 3 letters in their name." but was ' + result);
            }
        });
    });

});
