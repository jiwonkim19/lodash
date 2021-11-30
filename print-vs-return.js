// PRINT VS RETURN

//console.log in function body, call function --> print onto console
const practice = () => {
    console.log('hello world')
}
practice()

// return in function body , console.log --> prints onto console
const blah = () => {
    return 'wtf is this'
}
console.log(blah())

//***return in function body, call function --> does NOT print onto console***
const james = () => {
    return 'jiwon'
}
james()
