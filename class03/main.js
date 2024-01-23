// store multiple data

//array  []
//INDEXES (TOTAL LENGTH -1 VALUE)


// var names = ["ali","saad","ahmed","jawed","kamran"]

// document.write(names[4])


//object

// var obj = {

//     "firstname" : "hammad",
//     "secondname" : "irfan"

// }

// document.write(obj.firstname + "<br>")
// document.write(obj.secondname  + "<br>")
// document.write(Object.keys(obj)  + "<br>")
// document.write(Object.values(obj)  + "<br>")
// document.write(Object.entries(obj)  + "<br>")


//nested object

// var company = {
//     smartphones : {
//         models : {
//             apple : {
//                 iphoneX : {
//                     "ram" : "8gb",
//                     "Storage" : "256gb",
//                     "battery" : "3950 MAH",
//                     "batteryHealth" : "89%"

//                 },

//                 iphone12 : {
//                     "ram" : "12gb",
//                     "Storage" : "256gb",
//                     "battery" : "4250 MAH",
//                     "batteryHealth" : "98%"

//                 },

//                 iphone14 : {
//                     "ram" : "16gb",
//                     "Storage" : "512gb",
//                     "battery" : "4650 MAH",
//                     "batteryHealth" : "100%"

//                 },
//             }
//         }

//     }
// }

// document.write(Object.entries(company.smartphones.models.apple.iphone12))


// -----------------------------------------------------------------------

// var number = BigInt("983648936489632986986289696746976389682") 
// document.write(number)

//boolean

// var Isvalid = true
// var IsNotvalid = false


//undefine

// var a 
// document.write(a)


//functions

//NON PARAMETERIZED FUNCTION

// function play (){
//     document.write("getlost")
// }

// play();


//PARAMETERIZED FUNCTION

function New (v1 , v2){
document.write(v1 + v2)

}

New(25,25)
document.write("<br>")
New(250,250)
document.write("<br>")

New(84,69)