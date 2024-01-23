// var
// Reinstialization = true
// Redeclaration = true

// var value1 = 123
// var value1 = 782
// value1 = 456
// value1 = 789

// console.log(value1)


// let
// Reinstialization = true
// Redeclaration = false

// let value1 = 123
// value1 = 456
// value1 = 789

// console.log(value1)
// ====================================

// const
// Reinstialization = false
// Redeclaration = false

// const value1 = 123
// const value1 = 185
// value1 = 456
// value1 = 789

// console.log(value1)


// const ArrayData = ["Apple" , "Banana" , "Cherry" , "DragonFruit"]
// const [a, b , c , d] = ArrayData

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

function Data(value1 , value2){

   const addition = value1 + value2
   const substraction = value1 - value2
   const multiply = value1 * value2
   const divide = value1 / value2

   return [addition , substraction , multiply , divide]
}
const [plus , minus , mul , div] = Data(25 , 25)






console.log(plus)
console.log(minus)
console.log(mul)
console.log(div)
