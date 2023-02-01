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



// ========================Codwar essue ===================

let result = ''

function alternativeString(str) {
   
  for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase()){
        result = result + str[i].toLowerCase()
      }else{
        result = result + str[i].toUpperCase()
    }
    
  } 
  
    console.log(result)
  }

alternativeString('HellO')


String.prototype.toAlternatingCase = function () {
let str = '';
  for(let i = 0; i< this.length; i++){
    if (this[i] == this[i].toLowerCase()){ 
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str;
}



let str = 'hldsjvlindfsvnhskxhviskxnb'
function isIsogram(str){
  str = str.toLowerCase()
let result = true;
    for(let i = 0; i < str.length; i++){
      for(let j = i + 1; j < str.length; j++){
        if(str[i] === str[j]){
          result =  false
          
        }
      }
        
    }
    console.log(result);
}
isIsogram(str)

function isIsogram(str){
  let result = str.toLowerCase().split('').sort()
  for(let i = 0; i < result.length; i++){
    if(result[i] === result[i + 1]){
      return false
    }
  }
  return true
}
console.log(isIsogram('helo'));





function isIsogram(str){
  for(let i= 0; i < str.length; i++){
    if(str.slice( i + 1).includes(str[i])){
      return false;
    }
    
  }
  return true
}
console.log(isIsogram('helo'))






console.log(str.charAt(str.indexOf()) == str.charAt(str.lastIndexOf()));
  
// const array = [
//     3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9,
//     6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 0,
//   ];
  
//   //  Переменные для замера скорости выполнения сортировок
//   let startQuickSort;
//   let finishQuickSort;
//   let startBubbleSort;
//   let finishBubbleSort;
  
//   //! Быстрая сортировка
//   console.log('*** Быстрая сортировка ***');
  
//   let countQuickSort = 0;
  
//   function quickSort(array) {
//     startQuickSort = Date.now();
  
//     if (array.length <= 1) {
//       return array;
//     }
//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex];
//     let less = [];
//     let greater = [];
//     for (let i = 0; i < array.length; i++) {
//       countQuickSort += 1;
//       if (i === pivotIndex) {
//         continue;
//       }
//       if (array[i] < pivot) {
//         less.push(array[i]);
//       } else {
//         greater.push(array[i]);
//       }
//     }
  
//     finishQuickSort = Date.now();
//     return [...quickSort(less), pivot, ...quickSort(greater)];
//   }
  
//   console.log(`Отсортированный массив:  ${quickSort(array)}`);
//   console.log(`Шагов БЫСТРОЙ сортировки: ${countQuickSort}`);
//   console.log(`Время начала сортировки: ${startQuickSort}`);
//   console.log(`Время окончания сортировки: ${finishQuickSort}`);
//   console.log(finishQuickSort - startQuickSort);
  
//   //! Пузырьковая сортировка
//   console.log('*** Пузырьковая сортировка ***');
  
//   let countBubbleSort = 0;
  
//   function bubbleSort(array) {
//     startBubbleSort = Date.now();
  
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//         if (array[j + 1] < array[j]) {
//           let tmp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = tmp;
//         }
//         countBubbleSort += 1;
//       }
//     }
  
//     finishBubbleSort = Date.now();
//     return array;
//   }
  
//   console.log(`Отсортированный массив:  ${bubbleSort(array)}`);
//   console.log(`Шагов ПУЗЫРЬКОВОЙ сортировки: ${countBubbleSort}`);
//   console.log(`Время начала сортировки: ${startBubbleSort}`);
//   console.log(`Время окончания сортировки: ${finishBubbleSort}`);
//   console.log(finishBubbleSort - startBubbleSort);