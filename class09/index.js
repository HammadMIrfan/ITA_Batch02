var Variablename = "value1" ;
let abc = "hammad";
const xyz = abc
console.log(xyz)
console.log(abc)
document.write(Variablename)
console.log(Variablename)


for(var i = 0; i <= 100; i++){
document.write(i + "<br>")
// }

var fruits = ["Apple", "mango", "graps", "banana", "strawberry"]
console.log(fruits.length)
console.log(fruits.pop())
console.log(fruits.push("kiwi"))
console.log(fruits.reverse())
console.log(fruits.shift())
console.log(fruits.at(1))
console.log(fruits[2])
console.log(fruits.join("  "))
console.log(fruits.unshift("kiwi"))
console.log(fruits.copyWithin(2 , 0))


let object = {
    "Firstname": "Hammad",
    "Lastname": "Irfan",
    "Gender": "Male"
}
document.write(Object.keys(object))
document.write(Object.values(object))
document.write(Object.entries(object))
console.log(object)


const company = {
    smartphones: {
        Samsung: {
            samsungNoteSeries: {
                samsungNote10 : {
                    "Ram" : "8gb",
                    Storage : "128gb"
                },

                samsungNote10s : {
                    "Ram" : "12gb",
                    Storage : "256gb"
                }

            }
        }
    }
}

}
document.write(Object.keys(company.smartphones.Samsung.samsungNoteSeries.samsungNote10))
document.write(Object.values(company.smartphones.Samsung.samsungNoteSeries.samsungNote10))
document.write(Object.entries(company.smartphones.Samsung.samsungNoteSeries.samsungNote10))



