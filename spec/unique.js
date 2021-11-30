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

const filter = (collection, test) => {
    let arr = []
    each(collection, (element) => {
      if (test(element) === true) {
        arr.push(element)
      }
    })
    return arr
  }

const origArray = [1, 2, 1, 2, 3, 1, 4]
//Push to newArray if the number does not already exist in the new array
//loop through each of origArray, if num !== each of the nums in the new array, push to new array

// const uniq = (array) => {
//     let newArray = []

//     each(array,(num) => {
//         each(newArray,(newNum) => {

//         })

//     })

    




    // let newArray = []
    // each(array, (num) => {
    //     if (num !== each(newArray, uniqueNum) {
    //         newArray.push(num)
    //     }   
    // })
    // return newArray
// }

// let uniqueArray = uniq(origArray)
// console.log(uniqueArray)

let gummy = [1,5,1,2,6,4,3,4,5]
let res = [1]
each(gummy,(number)=> {
    let found = false
    each(res,(resNum) => {
        if (resNum === number) {
            found = true
        }
    })
    if (found === false) {
        res.push(number)
    }
})

console.log(res)