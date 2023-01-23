let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

let smth = "Lutfulla";
// console.log(smth.split('').join("").split('!').join('  '))  
// join bilan toString ikkalasini xam arrayni stringga o'tkazish uchun ishlatiladi
// ikkalasini farqi shundaki joinda arrayni stringga utkazish vaqti harflar orasiga qushimcha qushib 
// satrga utkaziladi toString esa virgul bilan


let strr = 'kelganimda uyda bul'
console.log(strr.split('').sort().reverse().join(''))
console.log(arr.sort() )

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

// foctory function 
function createCircle(radius) { //camel case da yoziladi factory funksiyasini nomlashda
    return {
        radius,  //bu radius : radius ga teng joy tejasxh uchun ishlatiladi
    draw() {    //bu funksiyani qisqartish uchun ishlatiladi  draw : function()}
        console.log('doira');
    }
    };
}

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