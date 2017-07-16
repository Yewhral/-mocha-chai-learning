const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const app = require("../app");

describe('App',function(){
    it('app should say hello', function() {
        let result = sayHello();
       assert.equal(result,'hello');
    });

    it('app should return a string', () => {
        let result = sayHello();
        assert.typeOf(result, 'string');
        }
    )

});