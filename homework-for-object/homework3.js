// Math.random()

let data = [
    {name : "Husniddin",   age : 19}, {name : "Sher",    age : 15},{name : "Sherzod",    age : 16},{name : "Sher",    age : 205},  {name : "Javohir", age : 45 }, {name : "Lutfulla", age : 20 },  {name : "Diyorbek",  age : 17}
]




/*Ismning uzunligini sanaydigan kod ismingiz ni  topib beradi*/
function countNameNum(arr){
    for( let i = 0; i < arr.length; i++ ){
        let objName = arr[i]['name']
        num = objName.length
        count = i + 1
        if(num > 5){
            console.log(count + ' you name length more than 5')
        }else if(num ==5) {
            console.log('congratulate you because you find win')
        }else{
            console.log('oh no you name length less than 5')
        }               
    }    
    
}    
// countNameNum(data)


function findAnyThing(arr){
    result = []
    for( let i = 0; i < arr.length; i++ ){
        let objName = arr[i]['name']

        result.push(objName)
    }
        
    
    console.log(result.sort().join(' '))
}
findAnyThing(data)
 
/*obyektdagi kerakli ismni topib beradi va yoshini ko'rsatadi*/    
function findLike(arr, like){
/*bu yerga array berasiz ichida object bo'lishi kerak. for example arr = [{name: 'anvar'},{name: 'Karim'}]*/
    for(let i = 0; i < arr.length; i++) {
        let str = arr[i].name
        let age = arr[i]['age']

        if(str === like){
            console.log((i+1)+ ' inchi objectdagi inson '+ str + ' yoshi '+ age + 'da')
        } else {

        //    console.log((i+1)+" Bu arrayda siz izlagan inson yo'q")    
        }

    }    
    
}     

// findlike(data, 'Sher')




/*kerakli so'zni topib berish funksiyasi. buyerga siz biron string bersangiz va kerakli jumla ya'ni so'zni yozsangiz topib beradi*/
function findWord(str, needWord){
    let arr = str.split(' ');
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase() === needWord){
            result.push(arr[i], i + ' tartib nomerda turibdi. ') 
        }    
        //harqanday string to'plamini berishingiz mumkin bu funksiyaga
    }    
    console.log(result.join(' ').toString(),' ', result.length)
}    

// findWord('hello world hello world hello ', 'hello')



//\\\\\\\\\\\\\\\\\\\\\\\\\\\========================bu Omad lattodagi telefon raqamini topib beradigan dastur====================\\\\\\\\\\\\\\\\\\\\\\\\\\
    //  function findNumber() {
        let phoneKod = Math.floor(Math.random() * 10 + 90),
        /*birinchi telefondi kodini chiqaradi bu yerda 10 ga ko'paytirganimiz random son 0 va 1 oralig'idagi son bo'lgani uchun
        uni unli songa o'zgartitib olami yani o'nlar xonasiga ko'taraamiz agar 90ni qo'shmaganimizda edi randomda masalan 0.21254... chiqsa 
        10 ga ko'paytirsak 2.1254 buladi yaxlitlangandan kiyin esa 2 uzi qoladi yoki 0.004 bulsa 
        ekranga 0 ni uzi xam chiqmasligi mumki shuni uchun 90 qo'shdim yani qanday son chiqsa xam 90 lik kod bilan boshlanadi*/
            mainNumber = Math.floor(Math.random() * 900) + 100,
            /*bu yerda birinchi bulib son random qilinyapti unga  oraliq beryapmiz desayam buladi yani 900ga ko'paytirishimiz
            randpomda chiqayotgan son 0 dan 1 gacha sonlar orasida chiqadi va 900 yani 3 xonali songa o'zgaradi */


            // firstNumber = Math.floor(Math.random() * 100),
            /* bu oddiy random sonni 100liklar xonasiga o'tkazish. bitta kamchilik qoldi yani 0 va 1 orasida 
             0.001 chiqsa  xato kelib chiqadi yani ikki xonali sonni qaytarmaydi bizdi amal 
             shuni uchun padStart degan methodan foydalanamiz */ 
             firstNumber = Math.floor(Math.random() * 100).toString().padStart(2, '7'),
            
            /*bundan string qaytadi buni oldini olishimiz uchun oldiga + yoki yammasini Number() methodiga olib quyishimiz mumkin xoxlasak*/
            // return "+998", phoneKod + mainNumber, firstNumber, nextNumber;
            
            nextNumber = +Math.floor(Math.random() * 100).toString().padStart(2, '9');
        
            // console.log('+',998, phoneKod, mainNumber, firstNumber, nextNumber);
    //  }
// findNumber()
