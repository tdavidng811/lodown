'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return any arguments passed on to the function.
 * 
 * @param {Data} value: The value that is pass into the function.
 *
 * @return value: The argument that was pass into the function parameters
 * will be returned.
 */
function identity(value) {
   
    return value;
}
module.exports.identity = identity;
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * typeOf: Designed to return the data type in a string of the value being 
 * passed in.
 * 
 * @param {Data} value: Value that will be determined what data type it is.
 * 
 * @return string: The data type of the value in a string.
 */
function typeOf(value) {
    switch(typeof value) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'function';
        case 'undefined':
            return 'undefined';
        case 'object':
            if (Array.isArray(value)) {
                return 'array';
            } else if (value === null) {
                return 'null';
            } else {
                return 'object';
            }
    }
}
module.exports.typeOf = typeOf;
/**
 * first: Designed to loop through an array and return a new array with the 
 * <numbers> given of elements at the BEGINNING of the old array. 
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number to indicate how many elements are being
 * added to the new array.
 * 
 * @return {Array}: Return a new array with a <number> of elements from the
 * beginning of the old array. Return an empty array if the <array> is not an 
 * array and if the <number> parameter is less than one. Return an array with 
 * the first element if a <number> is not given. 
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 1) {
        return [];
    } 
    if (typeof number !== 'number') {
        return array[0];
    }
    else {
        return array.slice(0, number);
    }
}
module.exports.first = first;
/**
 * last:  Designed to loop through an array and return a new array with the 
 * <numbers> given of elements at the END of the old array. 
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number to indicate how many elements are being
 * added to the new array.
 * 
 * * @return {Array}: Return a new array with a <number> of elements from the
 * end of the old array. Return an empty array if the <array> is not an 
 * array and if the <number> parameter is less than one. Return an array with 
 * the last element if a <number> is not given. 
 */
function last(array, number) {
    if (!Array.isArray(array) || number < 1) {
        return [];
    } 
    if (typeof number !== 'number') {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    else {
        return array.slice(array.length - number);
    }
}
module.exports.last = last;
/**
 * indexOf: Designed to loop through an array to return the array index of each
 * value being given if it is in the array. If not then -1 is returned.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Data} value: The value being compared to the elements in the array.
 * 
 * @return index: Return the array index of the <value> given in the array. If the
 * <value> is not in the array then return -1.
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        } 
    }
            return -1;
}
module.exports.indexOf = indexOf;
/**
 * filter: Designed to loop through an array to determine if the function
 * applied to it is either true or false. True ones will be returned in a 
 * new array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The function being applied to each element in the
 * array.
 * 
 * @return {Array}: Return an array with the <action> applied to each element
 * that proves to be true.
 */
function filter(array, action) {
    var newArray = [];
    each(array, function(e, i, c) {
        if (action(array[i], i, array)){
            newArray.push(array[i]);
        }
    });
    return newArray;
}
module.exports.filter = filter;
/**
 * reject: Designed to loop through an array to determine if the function
 * applied to it is either true or false. False ones will be returned in a 
 * new array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The function being applied to each element in the
 * array.
 * @return {Array}: Return an array with the <action> applied to each element that
 * proves to be false.
 */
function reject(array, action) {
    var newArray = [];
    each(array, function(e, i, c) {
        if (!action(array[i], i, array)) {
            newArray.push(array[i]);
        }
    });
    return newArray;
}
module.exports.reject = reject;
/**
 * partition: Designed to loop through an array to determine if the function
 * applied to it is either true or false. True ones will be return in one array,
 * false ones will be in another but both will be in one.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The function being applied to each element in the
 * array.
 * @return {Array}: Any <action> applied to the array that proves true will be in one
 * array and the ones that proves false will be in another but both will be elements of
 * another array.
 */
function partition(array, action) {
    var newArray = [[],[]];
    each(array, function(e, i, c) {
        if(action(array[i], i, array)) { 
            newArray[0].push(array[i]);
        } else {
            newArray[1].push(array[i]);
        }
    });
    return newArray;
}
module.exports.partition = partition;
/**
 * unique: Designed to loop through an array and remove duplicates in the 
 * array. Adds an element to the new array if there is no same element in it.
 * 
 * @param {Array} array: The array over which to iterate.
 * 
 * @return {Array}: Return an array with no duplicates.
 */
function unique(array) {
    var newArray = [];
    each(array, function(element) {
        if (indexOf(newArray, element) < 0) 
        newArray.push(element);
    });
    return newArray;
}
module.exports.unique = unique;
/**
 * map: Designed to loop through the <collection> and perform an <action> on it 
 * and return its value in an array.
 * 
 * @param {Array or Object} collection: The <collection> over which to iterate.
 * @param {Function} action: Function applied to the <collection>.
 * 
 * @return {Array}: Return the value of the <action> that is applied to the 
 * <collection> in an array.
 */
function map(collection, action) {
    var newArray = [];
    each(collection, function(element, index, collection) {
        newArray.push(action(element, index, collection));
    });
   return newArray;
}
module.exports.map = map;
/**
 * pluck: Designed to loop through the <collection> and perform an <action> on it 
 * and return all of its <property> in an array.
 * 
 * @param {Array of Object} collection: The <collection> over which to iterate.
 * @param {Value} property: The property that is to be returned in an array.
 * 
 * @return {Array}: Return the all the <property> in an array of the <collection> that was
 * iterated.
 */
function pluck(collection, property) {
    return map(collection, function(element, index, collection){
        return element[property];
    });
}
module.exports.pluck = pluck;
/**
 * contains: Designed to loop through the array to see if the <value> is in the
 * array. Return true if it is and false if not.
 * 
 * @param {Array} array: The <collection> over which to iterate.
 * @param {Value} : The value that is compared to the array elements.
 * 
 * @return {Array}: Return true if the value is in the array and false if it is
 * not.
 */
function contains(array, value) {
    return indexOf(array, value) > -1 ? true : false;

}
module.exports.contains = contains;
/**
 * every: Designed to loop through the <collection> and perform an <action>
 * to it and give a true or false value. Return true if the <action> performed on
 * the elements are all true. If not return false. If the <action> is not given
 * then return false only if all the elements are not true.
 * 
 * @param {Array or Object} collection: The <collection> over which to iterate.
 * @param {Function} action: The function that is applied to the <collection>.
 * 
 * @return {Boolean}: Return true if all the elements proves true. If not false.
 * Return false if <action> was not given and all elements are not true.
 */
function every(collection, action) {
var result = true;
    if (typeof action === 'function') {
        each(collection, function(e, i, c) {
            if (!action(e, i, c)) {
                 result = false;
            }
        });
    return result;
    } 
    else {
        each(collection, function(e, i, c) {
            if (!collection[i]) {
                result = false;
            }
            else result = true;
        });
       return result;
    }
}
module.exports.every = every;     
/**
 * some: Designed to loop through the <collection> and perform an <action>
 * to it and give a true or false value. Return false if the <action> performed on
 * the elements are all false. If not return true. If the <action> is not given
 * then return false only if all the elements are not false.
 * 
 * @param {Array or Object} collection: The <collection> over which to iterate.
 * @param {Function} action: The function that is applied to the <collection>.
 * 
 * @return {Boolean}: Return false if all the elements proves false. If not true.
 * Return false if <action> was not given and all elements are not false.
 */

function some(collection, action) {
     var result = false;
     if (typeof action === 'function') {
         each(collection, function(e, i, c) {
             if (action(e, i, c)) {
                 result = true;
             }
      });
      return result;
    } 
    
    else {
        each(collection, function(e, i, c) {
            if (collection[i]) {
                result = true;
            }
        });
       return result;
    }
}
module.exports.some = some;
/**
 * reduce: Designed to loop through the array and reduce it to one value by 
 * performing the <action> applied to it.
 * 
 * @pafram {Array} array: The <collection> over which to iterate.
 * @param {Function} action: The function that is applied to the <collection>.
 * @param {Number} seed: The number given as a starting point of the <action>.
 * 
 * @return value: Return a single value that is performed by the <action> on the
 * array.
 */
function reduce(array, action, seed) {
    var result;
    if (seed !== undefined) {
        result = seed;
        each(array, function(e, i, c) {
            result = action(result, e, i);
        });
    }
    else    {
        result = array[0];
        each(array, function(e, i, c) {
            if (i === 0) {
                return;
            }
            result = action(result, e, i);
        });
    }
    return result;
}
module.exports.reduce = reduce;
/**
 * extend: Designed to loop through an object and reassign its property value with 
 * the following object and so forth.
 * 
 * @pafram {Objects} collection: The objects that will be iterated.
 * 
 * @return {object}: Return a single object with its property value reassign by the
 * following object.
 */
function extend() {
    var args = Array.prototype.slice.call(arguments);
        args = [].slice.call(arguments);
    
   return reduce(args, function(one, two, three) { 
            for(var key1 in one) {
                for (var key2 in two) {
                    if(key1===key2) {
                        one[key1]=two[key2];
                    }
                    else {
                        one[key2]=two[key2];
                    }
                }
            }
            return one;
    }, args[0]);
}
module.exports.extend = extend;