// Variable: 'named storage of data', that potential can change

// console.log(x)// ERROR: x is 'not defined'


// declaring/defining variable x
let x
console.log(x) // x is defined - the value is: 'undefined'

// assignment/ assigning a value to x
x = 1
console.log(x) // 1



let y
y = () =>{
    console.log('hello')
    // not returning
}
console.log(y)  // [Function: y] not calling the function // does not log hello
console.log(y()) // undefined :: logs hello - evaluates but doesnt return anything

// FUNCTION DEMO
// 1: Evaluate 
let z = ()=> {
    console.log('z hello')
    return 1 // returns 1
}
console.log(z) // [Function: z] not calling the function // does not log hello
console.log(z()) // 1 :: logs  z hello console log z and then call it and returns 1



// const: cant reassign const
const q = 1234
// q = 12345 // Error

const nums1 = [1,2,3,4]
nums1.push(5) // works
console.log(nums1) // [1,2,3,4,5]
// nums = [0,1,2,3] // ERROR 


// let z = ()=> {
//     console.log('z hello')
//     return 1 // returns 1
// }
let zz = (x)=> {
    return 3 + x
}
let foo = zz(z()) // does inside () first 
                  // (z()) = 1 
                  // left with zz(1)
                  // zz(1) = 4 
                  // let foo = 4
                  // foo + 1 = 5


let fooz = zz(z() + zz(3) + zz(z()+ z()))
                            // zz(1 + 1)
                            // zz(2)
                            // zz(2) => 3+2 = 5
                            // 5
        // zz(z() + zz(3)+ 5)
                    //3(3) + 5
                    // 6 + 5
        // zz(z)
        // zz(1) + 6 + 5     = 12
        // zz(12)=> 3 +12 = 15                   
console.log(fooz) // 15





// 2: What do these log 
let y2 = ()=> {
    console.log('y hello')
    // not returning anything so returns undefined
}



// ARRAYS, DATATYPES, FUNCTIONS
// array of nums
const nums = [0,-1,2,13,-4,5,6,7,8,9,-100,1000,234,234,345346,234]

// takes a number returns a boolean
const isGreaterThan5 = (taco)=>{
    return taco > 5
}
isGreaterThan5(7) //true
isGreaterThan5(3) //false

// pass our defined function
// 1.FILTER
let numsGreaterThan5a = nums.filter( isGreaterThan5 )
// or pass on function that does the same thing
let numsGreaterThan5b = nums.filter( taco => taco > 5 )
console.log('numsGreaterThan5a', numsGreaterThan5a)
console.log('numsGreaterThan5b', numsGreaterThan5b)


// 2.FILTER And Map
let whatIsThis = nums.filter(taco => taco > 5).map( x => {
    return {num:x , isOdd: x%2!==0 }
})
 // number value > 5
 // [{num: number, isOdd:boolean},{num: number, isOdd:boolean}]
console.log('whatIsThis', whatIsThis)

////////////////

// numbers are not > 5
// [{num: number, isOdd:boolean},{num: number, isOdd:boolean}]
let whatIsThis2 = nums.map ( x => {
    return {num:x, isOdd: x%2 !== 0}
}).filter(n=>n>5) // filter will not work now // already being converted to object,
                 // n is expected to be a number, filtering from map now array of objects
                 // 


// array of objects with num key and isOdd key
// breaking up to first map above
let numObjects = nums.map (x =>{
    return {num:x, isOdd: x%2 !==0}
})
console.log('numObjects', numObjects)
// numObjects.filter


//numObject: {num: number, isOdd:boolean}
const isNumKeyGreaterThan5 = (numObject)=>{
    // log the number
    // console.log(numObject.num > 5) 
    if(numObject.num > 5) {
        return true
    }else{
        return false
    }
}

// two ways to call function
let x1 = isNumKeyGreaterThan5({num:2, isOdd:false})
let x2 = isNumKeyGreaterThan5({num:7, isOdd:true})
let x3 = isNumKeyGreaterThan5({number:7, isOdd:true}) // undefined > 5 = false


console.log('---------')
console.log(x1) // false
console.log(x2) // true
console.log(x3) // false undefined > 5 = false




