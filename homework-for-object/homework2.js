/*kalkulator qilish kerak 3 ta o'zgaruvchi bulsin 
birnchi o'zgaruvchini kiritamiz u bilan qilinadigan amalni tanlaymiz va ikkinchi o'zgaruvchini kiritamiz
// qiymat consol oynaga chiqaramiz*/
// let expres1 = +prompt('birinchi operatorni kiriting'),
//     operand = prompt('operandni kiriting + - * /'),
//     expres2 = +prompt('ikkinchi operatorni kiriting');


// if((String(expres1) === 'NaN')||(String(expres2) === 'NaN')){
// 	console.log('iltimos son kiriting')
// // agar operand teng bulmasa + yoki op =bulmasa - yoki =bulmasa *yoki = bulmasa /  
// }else if(operand !== '+' && operand !== '*' && operand !== '/' && operand !== '-') {
//     console.log('siz boshqa narsa kiritdingiz qayta kiriting');
    
// }else if(operand == '/' || '*' || '+' || '-'){
    
//     if(operand == '/'){
//         console.log(expres1 / expres2);
//     }else if(operand == '+'){
//         console.log(expres1 + expres2);
//     }else if(operand == '-'){
//         console.log(expres1 - expres2);
//     }else if(operand == '*'){
//         console.log(expres1 * expres2);
//     }

    
// }

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
        






// let database = [ {	
	
// 	faml: 'Nomozov',
// 	age1: 0  
// 	}, 
// 	{
	
// 	faml: "O'roqov",
// 	age1: 1
// 		}]

// let num = +prompt('necha juftsiz', 1)
 
// for ( let n = 1; num > n-1; n++){

// 	for( let i = 1; i < n+1; i++){
// 		let obj = database[n - 1]; 
// 		obj['name'+ i] = prompt(i + ' obyekt ismingizni kiriting');
// 		// obj['faml'+ i] = prompt(i + ' obyekt familyani kiriting');
// 		obj['age'+ i] = +prompt(i + ' obyekt yoshingizni kiriting');
// 	}

// for( let j = 1; j < n-1; j++){
// 	let obj2 = database[n]; 
// 	obj2['name'+j] = prompt(j + 1 +' tomon ismingizni kiriting');
// 	// obj2['faml'+ i] = prompt(i + ' tomon familyani kiriting');
// 	obj2['age'+j] = +prompt(j + 1 +' tomon yoshingizni kiriting')
	
// }

// }
// console.log(database)
// 	bos = +database[0]['age1'];
// 	hliq = +database[1]['age1'];

// 	if(bos > hliq){
// 		console.log(database[0].name1 +'yoshi katta')
// 	}else{
// 		console.log(database[1].name1 +'yoshi katta')
// 	}
// 	console.log('yoshlar yig\'indisi' + (bos + hliq) + ' ga teng')


// let names1 = {

// }
// let names2 = {

// }
// names1.age1 = 54//prompt('yoshingizni kiriting')
// names2.age2 = 45//prompt('yoshingizni kiriting')
// console.log(names1.age1 + names2.age2)




// let new = Object.assign({}, obj);
// console.log(copy); 
// }

// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name);
 

let infos = {
	student1 : {
		name : '' 
	},

	student2 : {
		age: 1,
        name : ''
	},
	student3: {
        name: ''
	}
}


function setInfo(obj, name, surname, age, i){
	// obj['studet'+ i] = obj['student']
    obj["student" + i]['name'] = name;
    obj["student" + i]['surname'] = surname;
    obj["student" + i]['age'] = age;
}

setInfo(infos,'Lutfulla', 'Murodjonov', 12, 3)
console.log(infos)