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
let kyung = [1,9,2,8]
kyungTest = (kyungTotal, kyungNum) => {
    return kyungTotal + kyungNum
}
reduce = (collection, iterator, accumulator) => {
    //const item = collection[key]
    if (accumulator !== undefined) {
        lastTotal = accumulator
        each(collection,(iterator(molah,item)=> {
            return molah + item
        }))
    } else {
        lastTotal = collection[0]
        each(collection, (iterator()))
    }
    each(collection,(iterator(lastTotal,item)) => {
        return lastTotal + item
     })
  };
  lastTotal + iterated variable

 
  // collection is the array 
  // iterator is the formula we will run on each item
  // we want to add up all the iterator values 
