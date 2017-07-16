const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require("../app");

const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,10);

describe('App',function(){
    it('sayHello should say hello', () => {
        assert.equal(sayHelloResult,'hello');
    });

    it('sayHello should return a string', () => {
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumbers should return value higher than 10', () => {
        assert.isAbove(addNumbersResult, 10);
    });

    it('addNumbers should return a number', () => {
        assert.typeOf(addNumbersResult, 'number');
    });

});