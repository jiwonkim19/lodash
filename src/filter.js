 // Return all elements of an array that pass a truth test.
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
filter = (collection, test) => {
  let arr = []
  each(collection, (element) => {
    if (test(element) === true) {
      arr.push(element)
    }
  })
  return arr
}

let foo = [1,2,3]
let fooTest = (x) => {
 return x > 1 
}
const filter = (collection, test) => {
  let arr = []
  each(foo, (element) => {
    if (test(element) === true) {
      arr.push(element)
    }
  })
  return arr
}

const res = filter(foo, fooTest)

console.log(res)
