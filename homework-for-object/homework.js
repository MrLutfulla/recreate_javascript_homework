let str = "hllo asas worsld come out bring "
let result = '';
function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(!str[i].includes('i') && !str[i].includes('o') && !str[i].includes('u') && !str[i].includes('a') && !str[i].includes('e')){
              
            result = (result + str[i])
        }
    }
    console.log(result)
}

checkString(str)

