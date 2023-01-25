// 7 ta funksiya qilib kelish
// pow
// Sqrt
// Abs
// floor
// ceil
// round
// trunck


// 1=================    POW   ====================

// let pow = (a, b) => { return a ** b }
// console.log(pow(2, 3))


// 2 =================     SQRT     =====================

// let sqrt = (a) => { /*return (a ** (1 / 2)) */  console.log(a ** (1 / 2))  }
// sqrt(9)


// 3===================  Abs    ==============
// function abs(anynum){
//     console.log((anynum ** 2) ** ( 1/ 2))
//     // return (anynum ** 2) **( 1/ 2)
// }
// abs(-49)


// function isMinusPlus(num) {
//     let result = Math.sign(num);
//     if ( result === 1) {

//         console.log( num + " is plus number")

//     }else {

//         console.log( num + " is minus number")
//     }
// }
// isMinusPlus(5)

// 4===============  floor ==================

// function floor (num) {
//     console.log( num - num % 1)
// }


// let calcFloor = ( n ) => {
//     return n - n % 1
// }
// console.log(calcFloor(6.519))


// 5======================= ceil =====================
// function xalcCeil (num){
//     return num + (1 - num % 1)
//     // console.log(calcCeil())
// }


// // 6===================== round      ================
// function calcRoud(num){
//     let tepm = num % 1
//     if( tepm >= 0.5){
//         // return num + (1 - num % 1)
//         console.log(num + (1 - num % 1))
//     }else{
//         console.log((num - num % 1))
//         // return num - (num % 1)

//     }
// }
// calcRoud(23.0215)
function round(num){ 
let a = num.toString().split('.')
// console.log
return (Number(a[0])) //.split().join().slice()kerakli joyini qirqib oladi string metodi 'dan gacha'

}
console.log(round(2.3) + 5.9)
// function calcTrunc(num){
//     console.log(num - num % 1)
//     // return num - num % 1
//     num.split()
// }
// calcTrunc(2.3)
// console.log(Math.trunc(2.3))