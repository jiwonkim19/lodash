const each = (collection, iterator) => {
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

const reduce = (collection, iterator, accumulator) => {
    each(collection, (val, i) => {
        if (accumulator === undefined && i === 0) accumulator = val;
        else accumulator = iterator(accumulator, val, i, collection);
    });
    return accumulator;
};
const longSentence = "a b c a a"
const longArray = longSentence.split('')
const uniqueCh = (accum,charac) => {
    if(accum[charac] === undefined){
        accum[charac] = 1
    } else {
        accum[charac] += 1
    }

// if character is not in accum:
//   put in accumulator and assign 1 to value
// else
//   do add one to the value
    
    
    return accum
}
reduce(longArray, uniqueCh,{})

const oneTwo = [1,2,2,1,2,3,3,4]
//if the number after the current number is the same add it to the accumulator
const ifRepeat = (acc,num,ind,col) => {
    if (col[ind] === col[ind + 1]) {
        acc -= col[ind]
    } 
    return acc
}

const damnit = reduce(oneTwo,ifRepeat,0)
console.log(damnit)