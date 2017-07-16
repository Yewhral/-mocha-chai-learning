const assert = require('chai').assert;
const app = require("../app");

const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,10);

describe('App',function(){

    describe('sayHello()', () => {
        it('sayHello should say hello', () => {
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return a string', () => {
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', () => {
        it('addNumbers should return value higher than 10', () => {
            assert.isAbove(addNumbersResult, 10);
        });

        it('addNumbers should return a number', () => {
            assert.typeOf(addNumbersResult, 'number');
        });
    });

});