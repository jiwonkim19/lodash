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
let foo = [1, 2, 3, 4, 5]

  indexOf = (array, target) => {
    var result = -1;
    each(array, (item, index) => {
      if (item === target && result === -1) {
        result = index;
      } 
    });
    return result;
  };

  console.log(indexOf(foo,2))



