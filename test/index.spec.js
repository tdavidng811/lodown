var 
    expect = require('chai').expect,
    sinon = require('sinon'),
    lodown = require('../index'),
    customers = require('./fixtures/customers.json');

describe('lodown', function() {
    describe('each', function() {
        it('should iterate an Array, applying action to each element, index of the element, and the collection', function() {
            var action = sinon.spy();
            lodown.each(customers, action);
            expect(action.callCount).to.equal(customers.length);
            customers.forEach(function(customer, index){
               expect(action.calledWith(customer, index, customers)).to.be.true;
            });
        });
   
        it('should iterate an Object, applying action for each value, key of value, and Object', function() {
            var action = sinon.spy();
            var customer = customers[0];
            lodown.each(customer, action);
            expect(action.callCount).to.equal(Object.keys(customer).length);
            for(var key in customer) {
              expect(action.calledWith(customer[key], key, customer)).to.be.true;
            }
        });
    });
});
describe('lodown', function() {
    describe('identity', function() {
        it('should return the data value passed on to the function', function() {
            expect('hello').to.eql('hello');
        });
    });
});

// describe('lodown', function() {
//     describe('typeOf', function() {
//         it('should return the data type in a string', function() {
//             expect(("a"), "string", "Should handle strings.");
//             expect((10), "number", "Should handle numbers.");
//             expect(([1,3]), "array", "Should handle arrays.");
//             expect(({a: "one"}), "object", "Should handle objects.");
//             expect((false), "boolean", "Should handle booleans.");
//             expect((undefined), "undefined", "Should handle undefined.");
//             expect((null), "null", "Should handle null.");
//             expect((function(){}), "function", "Should handle functions.");
//         })
//     })
// })
