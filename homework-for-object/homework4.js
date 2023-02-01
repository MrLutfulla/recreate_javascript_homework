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

// let sqrt = (a) => { 
//     if(a >= 0){ 
//         /*return (a ** (1 / 2)) */  console.log(a ** (1 / 2))  
//     }else{  console.log('you enter minus number')   }
//     }

//     sqrt(-9)

// 3===================  Abs    ==============
function abs(anynum){
    console.log((anynum ** 2) ** ( 1/ 2))
    // return (anynum ** 2) **( 1/ 2)
}
// abs(-0.23)


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

// function floor(num) {
//     console.log( num - num % 1)
// }
// floor(-6.25258)

// let calcFloor = ( n ) => {
//     return n - n % 1
// }
// console.log(calcFloor(6.519))


// 5======================= ceil =====================
function calcCeil (num){
    if(num >= 0){

        return num + (1 - num % 1)
       
    }else {
        return (num - (num % 1))
    }
}
console.log(calcCeil(-50.08))


// // 6===================== round      ================
function calcRoud(num){
    let tepm = num % 1
    if(num >= 0 && tepm >= 0.5){        
         // return num + (1 - num % 1)
         console.log(num + (1 - num % 1))

    }else if(num >= 0 && tepm <= 0.5 ){
        
        console.log((num - num % 1))
        // return num - (num % 1)
    
    }else if(tepm < -0.5 && num <= 0  ){
        console.log(num - 1 - num % 1);
    }else{
        console.log(num  - num % 1);
    }
}
calcRoud(-9.90635)

//====== trunc  ======= floor
function trunc(num){ 
let a = num.toString().split('.')
// console.log
return (Number(a[0])) //.split().join().slice()kerakli joyini qirqib oladi string metodi 'dan gacha'

}
console.log(round(2.3) + 5.9)


