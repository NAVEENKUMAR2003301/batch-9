// variables 

// 1.var 
// 2.let 
// 3.const

// var 

// var a = 100;

// var a;

// console.log(a);
// a = "run";
// console.log(a);

// let 

// let b = 200;

// b = "eight"

// let b = 200


// console.log(b);

// printing statement 

// const 

// const c = 200

// const c=300

// console.log(c);

// const a = prompt("what is your name");

// console.log(a);

// alert("hello everyone listen carefully")

// confirm("hello everyone is it ok")


// document.writeln("hello everyone")



// console method 

// let newAge = 25

// console.log(newAge);
// console.warn(newAge);
// console.error(newAge);
// console.clear()


// dataTypes 

// 1.primitive DataType 
// 2.non primitive DataType

// 1. primitive DataType 

// 1.Number 
// 2.string 
// 3.boolean 
// 4.null 
// 5.undefined 

// 2. non Primitive DataType 

// 1.array 
// 2.object 
// 3.function 
// 4.date 


// 1.Explain 

// 1.number 

console.log(typeof(100));

// 2.string 

console.log(typeof("abc"));

// 3.boolean 

console.log(typeof(true));

// 4.null 

// undefined 
console.log(a);
var a = 200


// non primitive dataType 

// 1.array 

let fruit = ["apple","orange","banana","guava","cherry"]

console.log(fruit);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);

// 2.object 

let employee = { 
    eName : "ragul",
    eRole : "frontend Developer"
}

console.log(employee);

console.log(employee.eRole);


console.clear();



// operators 


// 1.arthmatic operator 
// 2.assignment opertaors /
// 3.comparision operators
// 4.logical operators 


// 1.explain

// addition +
//subraction -
// multiplication *
// division /
// modulus %
// increment ++
//decement --
// exponencial **


console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log(10%20);
console.log(10**20);

// increment

// post increment and pre increment

// po - var++
// pr - ++var



let num = 20 
let num1 = num-- + num++ 

//num = 20 = 19
// 20-- = 19 
//19++ = 20

// num1 = 20-- = 19 + 20 = 39


console.log(num,num1);



let newNum = 40

let newNum1 = ++newNum

console.log(newNum,newNum1);


let num3 = 10 // 10 = 9 = 8
let num5 = num3-- - num3++

//num3 = 8 s r num3 = 9 m
//num5=18 s r m

console.log(num3,num5);


// assignment operators

console.clear();

let age1 = 20
age1 += 20 //== age1 = age1 + 20

console.log(age1);


let age2 = 10
let age3 = 100
age2 += age3

console.log(age2);

let age4 = 20
age4 *= 10
age4 /= 10
age4 %= 10
age4 = age4 ** 10

console.log(age4);

// comparision operator 

// operators  meanings  examples   results

//   <          lessthen  5<2        false

//   >         greterthen  5>2       true

//   <=         lessthen equal  5=5 , 5<=0, 5<=4 , 5<=6 , 5<=6

//   >=        greater then  5>=5

//  =         equal   5=5 5=4

//   ==         loosy type equal 5==5  true 5=="5"  true

//  ===         strictly type equal  5===5 true 5==="5" false

//  !               not  !true  = false  , !false = true.

//  !=        loosy not equal   5!=2 = true

// !==         strictly not equal  5!==5 = false

console.log(10<20);
console.log(10>20);

console.log(10<=20);

console.log(10>=20);

console.log(4=="4");

console.log(5===5);

console.log(5!="5");

console.log(5!=="5");



// logical operator 


console.clear();


// operator  meaning   example   result

//  &&        logical And  (5=="5") && (5==="5") = flase

// ||         logical Or    (5=="1") || (5!=="5") = true

// !          logical not   !(5<3) = true


let age5 = 18

console.log(age5>=18 && age5<=30); // 18>=18 = true, 18<=30 = true = true

console.log(age5!="5"&&age5!=="5"); // 18!="5" = true, 18!=="5" = true

console.log(age5 === "18" || age5 < 22)

console.log(!(age5 === "18" || age5 < 22))


// concatenation 


let a1 = "marvel";
let b1 = "Dc"

let c1 = a1 +" "+ 5 + " "+"fyfftfjtf"+b1

console.log(c1);


// template string 

let d1 = `${a1} dfew  jkgkgkjj  7556 9897 ${b1}`

console.log(d1);


// type conversion 

// 1.implicit conversion
// 2.explicit conversion

// 1.explain 

let str = "45"

let num6 = 45

console.log(typeof(str+num6));  // str + any = str

// string 


console.log("hi"+45);
console.log("hi"+true);
console.log("hi"+undefined);
console.log("hi"+"34");
console.log("hi"+null);
console.log("hi"+[1,2]);
console.log({hi:"3"}+"h1");

// number


console.log(5+true);
console.log(5+"5");
console.log(5+undefined);
console.log(5+null);
console.log(5+[3]);
console.log(5+{});
console.log(5+5);


// Boolean


console.log(true+10);
console.log(true+"g");
console.log(true+undefined);
console.log(true+true);
console.log(true+null);
console.log(true+[]);
console.log(true+{});

console.clear();

// 2. explain 


console.log(10+Number("10"));
console.log(Number(""));
console.log(10+Number("abc"));
console.log(10+Number(undefined));
console.log(10+Number(true));
console.log(10+Number([]));
console.log(10+Number({}));


console.log(Boolean(""));
console.log(Boolean("12"));
console.log(Boolean("abc"));
console.log(Boolean(undefined));
console.log(Boolean(-1));
console.log(Boolean([1,2]));
console.log(Boolean({0:3}));
console.log(Boolean(NaN));


console.log(String(10));

console.clear();


// flow control statement 

// 1.conditional statement 
// 2.looping statement 

// 1.explain 

// 1.if 
// 2.if else
// 3. if else else if 
// 4.ternary operator
// 5.switch statement 
// 6.nested if 

// 1.if  

// condition true = allow

// condition false = exit 


if(5>2){
    console.log(`i am here`);
}

// 2.if else 


    // true = if allow 
    // false = else allow

if(35<=35){
    console.log(`i am pass`);
    
}else{
    console.log(`i am fail`);
}


// 3.if else else if 


let hour = 22

if(hour>=1 && hour <= 6){
    console.log(`early morning`);
    
}else if(hour>=7 && hour<=11){
    console.log(`morning`);
    
}else if(hour>=12 && hour<=15){
    console.log(`afternoon`);
    
}else if(hour>=16 && hour<=19){
    console.log(`evening`);
    
}else{
    console.log(`night`);
    
}

// switch statement 


// switch(){
//     case value : console.log(``);break;
//     case value : console.log(``);break;
//     case value : console.log(``);break;
//     case value : console.log(``);break;
// }


let trafficLight = "green"

switch(trafficLight){
    case "red" : console.log(`should vechile stop`); break;
    case "yellow" : console.log(`start your vechile`); break
    case "green" : console.log(`go`);break;   
}

// nested if 

// let age = prompt("enter your age")
// let weight = prompt("enter you weight")
// let height = prompt("enter your height")

// if(age>=18){
//     if(weight>=55){
//         if(height>=160){
//             alert(`your selceted`);
//         }else{
//             console.log(`increse your height`);
//         }
//     }else{
//         console.log(`increse your weight`);
        
//     }
// }else{
//     console.log(`your age is not eligible`);
    
// }


// ternary operator 

// condition ? "true" : "false"

let finalScoreStatus = false

finalScoreStatus ? console.log("allow gate exam")
 : console.log("not eligible")
 















