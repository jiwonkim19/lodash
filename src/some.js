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

  every = (collection, truthTest = _.identity) => {
    return reduce(collection, ((acc, val) => {
        let varTruth = truthTest(val)
        if (varTruth === false || varTruth === null || varTruth === undefined || varTruth === 0) {
            acc = false
        }
        return acc
    }), true)
}

 // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  some = (collection, iterator) => {
    return every(collection, (value2) => {
        let boohoo = iterator(value2)
        if (boohoo === true)
    })



    // return each(collection, (a,b) => { 
    //       if (iterator(a) === true) {
    //           break
    //       } 
    //       return true
    //   })

    //   return every = (collection,)


    
    // TIP: There's a very clever way to re-use every() here.
  };

