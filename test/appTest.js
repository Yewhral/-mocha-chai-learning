const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
//const app = require("../app");

describe('App',function(){
    it('sayHello should say hello', () => {
        let result = sayHello();
        assert.equal(result,'hello');
    });

    it('sayHello should return a string', () => {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should return value higher than 10', () => {
        let result = addNumbers(10,10);
        assert.isAbove(result, 10);
    });

    it('addNumbers should return a number', () => {
        let result = addNumbers(0,10);
        assert.typeOf(result, 'number');
    });

});