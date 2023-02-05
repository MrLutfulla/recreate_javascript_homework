// let arra = [1, 2, 3]
// let arra1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function counAdd(arr1, arr2){
//     let newArr = arr1.concat(arr2)
//     let result = 0
//     for(let i = 0; i < newArr.length; i++){
//     result = result + newArr[i]
//     }
// return result;
// }
// console.log(counAdd(arra, arra1))


// function removeEveryOther(arr){
//     let a = []
//     arr.forEach(function (any, i){
//         if(i % 2 == 0){
//             a.push(any);
//         }  }    )
//         return a
//     }
//     removeEveryOther(array)
    
// let arr = [1, 2, 4, 4, 5, 6, 7, 8, 9]

// function multipleOfIndex(array) {
//     let a = []
//     array.forEach(function (any, i){
//         if(any % i === 0){
//             a.push(any);
//         }  }    )
//         console.log(a)
// }
// multipleOfIndex(arr)




// for (let i = 0; i < arr.length; i++){
//     console.log()
//     if(arr[i] === 0){
//         continue /* continue shartda ishlatganimizda shart tekshirgan misolni tashlab ketadi
//         misol uchun arrayda yurib chiqsak arr = [1, 2, 3, 4, 5, 6] da if(arr[i] = 2)ga{continue davom ettir deyapmiz yani, shu sonni tashlab utib ket deyapmiz}*/
//     }


//     if (arr[i] === 100) {
//         console.log('hello');
//         break /*BREAK inglizchada tarjima qilsak sindirmoq yani, for breakni ko'rsa siklni to'xtatdi  buning uchun albatta shart berishimiz kerak yani if amalidan foydalanamiz
//         continue daxam breakda xam qanaqadir shartdan foydalanishimiz kerak mantiqiy uylab qarasa xam*/       
//     }
// }


// function meva(soni, narxi){
//     let a = soni / 2 - soni % 2 / 2
//     for( let i = 0; i < soni; i++){
//         if(soni % 3 === 0){
        
        
// /*10 ta olma bulsa ulardan 2 2 2 1 7ta uchun pul tulaydi yani 2 ta olsa 3- si tekinga beriladi
// nechta 2 borligini topish kerak 2 ga bulsak bo'ladi


// */


//     }else{
//         console.log('daas');
//     }
// }
// console.log(a)
// }
// meva(7, 2)

// function removeUrlAnchor(url){
//     let result = ""
//     for(let i = 0; i < url.length; i++){
//       if(url[i] === "#") { break }
//       result += url[i]
//     }
//     return result;
// 0  }


// function removeUrlAnchor(url){
//     return url.split('#')[0];
//    }

   function getCount(str) {
    let result = 0;
    let temp = str.split("")
    temp.forEach(function (any){
          if((any === 'e') || (any === 'a') || any === 'i' || any === 'o' || any === 'u'){
              result += 1
          }  }    )
          return result;
  }

  console.log(getCount('helloi akshjh usahdnjas oxasjxu'))


  function trim(str, size) {

    str = str.split('')
    if(str.length <= size) {
      
       str.splice(size )
    return str.join('')
    }else if(str.length > size && size > 3){
      
         str.splice(size - 3, str.length+size , '...')
    return str.join('') 
    }else{
      str.splice(size , str.length, '...')
      return str.join('')
    }
}

console.log(trim('hello world', 2));







