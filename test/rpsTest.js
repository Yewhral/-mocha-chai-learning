const expect = require('chai').expect;
const rockPaperScissors = require("../rps");

describe('RockPaperScizzors', () => {
    describe('smoke tests', () => {
        it('should exists', () => {
            expect(rockPaperScissors).to.exist;
        });

        it('should be an object', () => {
            expect(rockPaperScissors).to.be.a('object');
        });
    });
});
