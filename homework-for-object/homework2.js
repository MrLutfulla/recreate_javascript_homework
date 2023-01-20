/*kalkulator qilish kerak 3 ta o'zgaruvchi bulsin 
birnchi o'zgaruvchini kiritamiz u bilan qilinadigan amalni tanlaymiz va ikkinchi o'zgaruvchini kiritamiz
qiymat consol oynaga chiqaramiz*/
let expres1 = +prompt('birinchi operatorni kiriting'),
    operand = prompt('operandni kiriting + - * /'),
    expres2 = +prompt('ikkinchi operatorni kiriting');


if((String(expres1) === 'NaN')||(String(expres2) === 'NaN')){
	console.log('iltimos son kiriting')
// agar operand teng bulmasa + yoki op =bulmasa - yoki =bulmasa *yoki = bulmasa /  
}else if(operand !== '+' && operand !== '*' && operand !== '/' && operand !== '-') {
    console.log('siz boshqa narsa kiritdingiz qayta kiriting');
    
}else if(operand == '/' || '*' || '+' || '-'){
    
    if(operand == '/'){
        console.log(expres1 / expres2);
    }else if(operand == '+'){
        console.log(expres1 + expres2);
    }else if(operand == '-'){
        console.log(expres1 - expres2);
    }else if(operand == '*'){
        console.log(expres1 * expres2);
    }
    
    
}

// switch(operand){
// 	case "+":
// 		console.log(expres1 + expres2)
// 		break
// 	case "-":
// 		console.log(expres1 - expres2)
// 		break
// 	case "*":
// 		console.log(expres1 * expres2)
// 		break
//         case "/":
// 		console.log(expres1 / expres2)
// 		break
// 	default:
// 		console.log('error')
// }
        

