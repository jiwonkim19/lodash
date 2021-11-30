// HOW TO ADD KEY VALUE PAIR TO OBJECT:

// Using dot notation:
// obj.key3 = "value3";

// Using square bracket notation:
// obj["key3"] = "value3";

// The first form is used when you know the name of the property. 
// The second form is used when the name of the property is dynamically determined.
// Like in this example:

// var getProperty = function (propertyName) {
//     return obj[propertyName];
// };

// getProperty("key1");
// getProperty("key2");
// getProperty("key3");
const util = require('util')

// import {util} from 'util'
const jiwon = {}
jiwon['coffee'] = '' 
const drinks = ['starbucks', 'sharetea']
jiwon.coffee = drinks
jiwon['dessert'] = 'cake'
console.log(jiwon)
console.log(util.inspect(jiwon))