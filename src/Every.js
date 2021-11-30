each = (collection, iterator) => {
    if (Array.isArray(collection)) {
        for (let key = 0; key < collection.length; key++) {
          const value = collection[key]
          iterator(value, key, collection)
        }
      } else {
        for (const key in collection) {
          iterator(collection[key], key, collection)
        }
      }
    }
    
    reduce = (collection, iterator, accumulator) => {
        each(collection, (val, i) => {
            if (accumulator === undefined && i === 0) accumulator = val;
            else accumulator = iterator(accumulator, val, i, collection);
        });
        return accumulator;
    };
    
const identity = (val) => {
        return val
      };

const isEvenTest = (numero) => {
    return numero % 2 === 0
}

every = (collection, truthTest = identity) => {
    return reduce(collection, ((acc, val) => {
        let varTruth = truthTest(val)
        if (varTruth === false || varTruth === null || varTruth === undefined || varTruth === 0) {
            acc = false
        }
        return acc
    }), true)
}

evenNum = [false,false,false]
const evenAnswer = every(evenNum)
console.log(evenAnswer)