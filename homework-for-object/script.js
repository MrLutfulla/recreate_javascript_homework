// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

// let smth = "Lutfulla";
// // console.log(smth.split('').join("").split('!').join('  '))  
// // join bilan toString ikkalasini xam arrayni stringga o'tkazish uchun ishlatiladi
// // ikkalasini farqi shundaki joinda arrayni stringga utkazish vaqti harflar orasiga qushimcha qushib 
// // satrga utkaziladi toString esa virgul bilan


// let strr = 'kelganimda uyda bul'
// console.log(strr.split('').sort().reverse().join(''))
// console.log(arr.sort() )

// sort funksiyasini odatda sartarovka qilish uchun ishlatiladi
// alfavit buyisha sartarovka qiladi. numberlarni sartarovkasida ishlatiladi ammo faqat birinchi raqamga qarab sartarovka qilib yuboradi.

// 
// endi buni tug'irlash uchun bir ish qilamiz
//  bu ananim funksiya deb ataladi
// sort(function(a, b) {
//     return a - b
// });


// javascript dasturlash tilida obyektlar denamik xisoblanadi va 
// obyekntni funksiya orqali yaasashning ikki xil usuli mavjud. ular
// factory function va constructor function 

// // foctory function 
// function createCircle(radius) { //camel case da yoziladi factory funksiyasini nomlashda
//     return {
//         radius,  //bu radius : radius ga teng joy tejasxh uchun ishlatiladi
//     draw() {    //bu funksiyani qisqartish uchun ishlatiladi  draw : function()}
//         console.log('doira');
//     }
//     };
// }

// pascal case
// Constructor function
// function Circle(radius, x) {
//     this.radius = radius;
//     this.x = x
//     this.draw = function () {
//         console.log('doira')
//     }
// }

// let doira = new Circle(2, 2);
// console.log(doira)


// function repeatStr(str, num){
//     for(let i = 0; i < num; i++){
//         console.log(str + (i+1))
//     }
// }
// let a = "heGHFGHFVJGBKllo "
// // repeatStr(a, 6)

// function repeat(str){
// console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())
// }

// repeat(a)
// function derepeat()
// let str = "holloalaykum";
// console.log(str.charAt())



// function getCardNumber (cardNumber){

//     if (cardNumber.length > 16 ){

//     console.log('Enter the correct card number');

//     }else if( cardNumber.length < 16){

//         console.log('The card number is incomplete')

//         console.log(cardNumber.slice(0, 4 ) +' ' + cardNumber.slice(4, 8) + ' '+ cardNumber.slice(8, 12) + ' ' + cardNumber.slice(12) )

    

//         console.log('Raqam kiriting siz string kiritdingiz');

//     }else{ 
//          if(cardNumber.slice(0, 4 )=='9860'){

//              console.log('You have entered the correct card number');
//              console.log('This is Humo card');

//             }else if (cardNumber.startsWith("8600")){

//                 console.log('You have entered the correct card number');
//                 console.log('This is Uzcard card');

//             }else if (cardNumber.startsWith('8778') || cardNumber.startsWith( '4000')){
                
//                 console.log('You have entered the correct card number');
//                 console.log('This is VISA card');

//             }else{
//                 console.log("This card was not found");
//             }

//     console.log(cardNumber.slice(0, 4 ) +' ' + '****' + ' '+ '****' + ' ' + cardNumber.slice(12) );
// } 
// }
// str = '986012342621812'
//   getCardNumber(str);


  
//   let myNumber = 1010101010101010;
//   console.log(myNumber.toString(10))
for(let i = 0; i <str )