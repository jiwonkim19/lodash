// filter this array so 'bear' and 'tree' don't appear in it
const words = ['hello', 'bear', 'racoon', 'tree']



 with a 'for' loop
 for (let i = 0; i < words.length; i++) {
     if (words[i] !== 'bear' && words[i] !=='tree') {
         console.log(words[i])}
     }

// with 'filter'
 const filteredWord= words.filter(word => {
     if (word !== 'bear' && word !== 'tree') {
         return(word)
     }
 }
 )

// console.log(filteredWord)

// const filteredWord= words.filter(word => {
//     if (word !== 'bear' && word !== 'tree') {
//         console.log(word)
//     }
// } )
// console.log(filteredWord)

//add 2 to each of the numbers
// const numbers = [1,2,3,4]

const newNumber = numbers.forEach(num => {
    return num + 2;
});
 console.log(newNumber)