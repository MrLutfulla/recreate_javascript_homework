let str = "hello asas world come out bring lorem ipsum"
let result = '';
function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(!str[i].includes('i') && !str[i].includes('o') && !str[i].includes('u') && !str[i].includes('a') && !str[i].includes('e')){
              let cut = result.indexOf('i')
              
            result = (result + str[i])
        }
    }
    console.log(result)
}
checkString(str.toUpper)











// let result = [];
// function findcutWord(str){
//     let arr = str.split(' ');
   
//     for(let i = 0; i < arr.length; i++){
//         if(!arr[i] === 'i'){
//             result.push(arr[i]) 
//         }    
//         //harqanday string to'plamini berishingiz mumkin bu funksiyaga
//     }    
//     console.log(result.join(' '),' ', result.length)
// }   
// // findcutWord('helloiod,moiub ')


// let names = ["Ivan", "Andrey", "Arsen"]
// let newNames =  names.map(name => name + "  hello")
// console.log(names)
// console.log(newNames)