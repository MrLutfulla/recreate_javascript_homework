let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

let smth = "Lutfulla";
// console.log(smth.split('').join("").split('!').join('  '))  
// join bilan toString ikkalasini xam arrayni stringga o'tkazish uchun ishlatiladi
// ikkalasini farqi shundaki joinda arrayni stringga utkazish vaqti harflar orasiga qushimcha qushib 
// satrga utkaziladi toString esa virgul bilan


let strr = 'kelganimda uyda bul'
console.log(strr.split('').sort())
console.log(arr.sort() )

// sort funksiyasini odatda sartarovka qilish uchun ishlatiladi
// alfavit buyisha sartarovka qiladi. numberlarni sartarovkasida ishlatiladi ammo faqat birinchi raqamga qarab sartarovka qilib yuboradi.

//  bu ananim funksiya deb ataladi
// endi buni tug'irlash uchun bir ish qilamiz
// sort(function(a, b) {
//     return a - b
// });