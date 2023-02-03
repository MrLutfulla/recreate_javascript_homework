let arra = [1, 2, 3]
let arra1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function counAdd(arr1, arr2){
    let newArr = arr1.concat(arr2)
    let result = 0
    for(let i = 0; i < newArr.length; i++){
    result = result + newArr[i]
    }
return result;
}
console.log(counAdd(arra, arra1))


function removeEveryOther(arr){
    let a = []
    arr.forEach(function (any, i){
        if(i % 2 == 0){
            a.push(any);
        }  }    )
        return a
    }
    removeEveryOther(array)
    
let arr = [1, 2, 4, 4, 5, 6, 7, 8, 9]

function multipleOfIndex(array) {
    let a = []
    array.forEach(function (any, i){
        if(any % i === 0){
            a.push(any);
        }  }    )
        console.log(a)
}
multipleOfIndex(arr)




for (let i = 0; i < arr.length; i++){
    console.log()
    if(arr[i] === 0){
        continue /* continue shartda ishlatganimizda shart tekshirgan misolni tashlab ketadi
        misol uchun arrayda yurib chiqsak arr = [1, 2, 3, 4, 5, 6] da if(arr[i] = 2)ga{continue davom ettir deyapmiz yani, shu sonni tashlab utib ket deyapmiz}*/
    }


    if (arr[i] === 100) {
        console.log('hello');
        break /*BREAK inglizchada tarjima qilsak sindirmoq yani, for breakni ko'rsa siklni to'xtatdi  buning uchun albatta shart berishimiz kerak yani if amalidan foydalanamiz
        continue daxam breakda xam qanaqadir shartdan foydalanishimiz kerak mantiqiy uylab qarasa xam*/       
    }
}