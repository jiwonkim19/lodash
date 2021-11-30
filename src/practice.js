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

let gummy = [1,1,2,3,4,5]
let res = [1]
each(gummy,(number)=> {
    let found = false
    each(res,(resNum) => {
        if (resNum === number) {
            found = true
        }
    })
    if (found === false) {
        push.res(number)
    }
})

console.log(res)