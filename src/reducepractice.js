let _ = {}

_.each = (collection, iterator) => {
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


_.reduce = (collection, iterator, accumulator) => {
    _.each(collection, (val, i) => {
        if (accumulator === undefined && i === 0) accumulator = val;
        else accumulator = iterator(accumulator, val, i, collection);
    });
    return accumulator;
};
const isEven = (num) => {
    return num % 2 == 0
}
let hkyoun = [0,1,2,3]
const formula = (a,b,c,d) => {
  if (isEven(b)) {
      a.push(b)
  }
  return a
}
_.reduce (hkyoun,formula, [])

let jkim = [1,2,7,8,9]
const addEach = (uno, dos) => {
    uno = uno + dos
    return uno
}
_.reduce(jkim,addEach)

let kyung = [1,9,2,8,5,9]
const multiplyEach = (meh,hehe) => {
    meh = meh * hehe
    return meh
}
_.reduce(kyung,multiplyEach,2)

//count all unique characters 
_.uniq = (array) => {
  let res = []
  _.each(array, (number) => {
    let found = false
    _.each(res, (resNum) => {
      if (resNum === number) {
        found = true
      }
    })
    if (found === false) {
      res.push(number)
    }
  })
  return res
}
//can i change into an object
const longSentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const woah = (collection) => {
const splitArray = collection.split(" ")
const uniqueArray = _.uniq(splitArray)
return uniqueArray

}

woah(longSentence)


  word[ind] = ''
  acc.push(word[ind] = '')
  return acc
}

_.reduce(longSentence,woah, {})

_.reduce = (collection, iterator, accumulator) => {
    _.each(collection, (val, i) => {
        if (accumulator === undefined && i === 0) accumulator = val;
        else accumulator = iterator(accumulator, val, i, collection);
    });
    return accumulator;
};

_.each = (collection, iterator) => {
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


_.reduce = (collection, iterator, accumulator) => {
    _.each(collection, (val, i) => {
        if (accumulator === undefined && i === 0) accumulator = val;
        else accumulator = iterator(accumulator, val, i, collection);
    });
    return accumulator;
}

const xmasSongs = [
        'jingle bells',
        'the first noel',
        'away in a manger',
        'this christmas',
        'o holy night'
        ]

firstTwo = (xmasArray, title, x, xmasCollection) => {
    xmasArray = xmasCollection.map(title => title[0] + title[1])
    return xmasArray
}

_.reduce(xmasSongs,firstTwo)

 xmasString = (newString, songT, y, holiArray) => {
    newString = holiArray.map(songT => songT[0] + songT[1])
    const stringsAttached = newString.join('')
    return stringsAttached
 }
 _.reduce(xmasSongs,xmasString)