


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

// let finalScoreStatus = false

// finalScoreStatus ? console.log("allow gate exam")
//  : console.log("not eligible")


console.log(10=="10");
console.log(10==="10");


//  2.explain /


// 1.for loop
// 2.while loop
// 3.do while
// 4.for in 
// 5.for of


// 1. for loop 

// for(intialization;contision;iteration){

// }

for(let i = 1; i<10; i++ ){
    console.log(i);   
}


for(let a = 0;a<10;a++){
    if(a%2==0){
        console.log(`even number ${a}`);
        
    }else{
        console.log(`odd number ${a}`);
        
    }



}

console.clear();


// while loop 

// initizalation 

// while(condition){
//     statement 
//     iteration
// }


let val = 10;
do{
    console.log(val); val--
}
while(val>=1)



    // for of 

    let str12 = "javascript"
    
    for(let b of str12 ){
        console.log(b);
    }

    // for in 

    for(let rahul in str12){
        console.log(rahul);
        
    }


    console.clear();


    // function 

    function hello(a,b){
        return a+b
    }

    hello(1,2)
   let helloVal = hello(1,2)
   console.log(helloVal);
   
    
let person1 = {
    Pname : "monik"
}

function hi(a,b="enter age"){
    console.log(`person1 name is : ${a}, person age is : ${b}`);
    
}

hi("rahul",22)




// return type 


function findRec(l,b){
    return l*b 
}


let b3 = findRec(100, 200);

console.log(b3);


function rec(l,b){
    let contion = true;
    if(contion){
        return l*b
    }
}
let b4 = rec(20,20)

console.log(b4);


// var 
// let 
// const


function outFun(){
    if(true){
        var functionVar = "i am a var variable"
        
    }
    console.log(functionVar);
}

outFun()
function letFun(){
    if(true){
        const functionVar = "i am a let variable"
        
        console.log(functionVar);
    }
}

letFun()


var gScope = "var"

let bScope = "let"

const bscope1 = "const"

console.log(window.gScope);
console.log(window.bScope);
console.log(window.bScope1);







var u = 10
let v = 20
const w = 30

function accessGlobalScope(){
    var u = 100
    var v = 200
    var w = 300

    console.log(u+v+w);
    

}

console.log(u+v+w)
accessGlobalScope()


// function types 

// 3 types 


// 1.named function
// 2.anonymous function 
// 3.arrow function 


// 1. explain 

function hello(){
console.log("named function");

}

hello()

// 2.explain 


let hii = function(){
    console.log("annonyms function"); 
}

hii()

// 3.explain 

let arrow = ()=>{
    console.log("arrow function");  
}

arrow()

console.clear();

//parameter
// 1.named function 

function parameter1(a,b=20){
    console.log(`Named function : ${a+b}`);  
}

parameter1(10)

//anonymous function

let parameter2 = function(a,b){
    console.log(`anonymous function : ${a+b}`);
    
}

parameter2(30,50)

// Arror function

let parameter3 = (a,b=500)=>{
    console.log(`Arrow function : ${a+b}`);
    
}

parameter3(100)


let firstName = "john"

let returnArrow = (a)=>{
    return a
}

let ab = returnArrow(firstName)

console.log(ab);



// higher order function and callback function

let function1 = ()=>{
    console.log("i am a higher order function");
    
}

let function2 = ()=>{
    console.log("i am a callback function");
    
}

function1(function2())


function add(callback,a,b){ // 3 sub=callback,a=20,b=40
    console.log(a+b);// a=20,b=40 = 60
    callback(20,20) // sub=callback(20,20), sub(20,20)
    
}

function sub(num1,num2){ // num1 = 20, num2 = 20
    console.log(num1-num2); // 20-20 = 0
    
}

add(sub,20,40)  // 3

// hoisting

const a5 = 10
console.log(a5);



h1()
function h1(){
    console.log("heloo");
    
}

var h2 = function(){
    console.log("hello");
    
}
h2()

var h3 = ()=>{
    console.log("hi");
    
}

h3()
  //self invoke function

//   (function () {
//     console.log("hello dear");
//   }
// )();

// currying and uncurrying 


// uncurrying 

function mul(a,b,c){
    console.log(a*b*c);
    
}

mul(10,20,30)


// currying 


function del(a){ // del (10)
    return function(b){ // (30)
        return function(c){ // (40)
            console.log(a*b*c);
        }
    }
}

del(10)(30)(40)

console.clear();


// generator function 

function*gen(){
    yield "1"
    yield "2"
    yield "3"
    yield "4"
}

let genn = gen()

console.log(genn.next().value);
console.log(genn.next().done);
console.log(genn.next());
console.log(genn.next());
console.log(genn.next());



function*he(){

}


function add(i,a,b){

console.log(a+b);

i(20,30)
}
function sub(a,b){
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    
    
    
}
add(sub,10,20)  // 1. add() -- sub(10,20) -- 10-20 = -10
                 // 2.add()-- NaN


// data structure 

// 1.array 

let all = ["one","two","three"]

console.log(all);
console.log(all[1]);
console.log(all[all.length-1]);
console.clear();


// 1. multiple var store
// 2. different datatype hold
// 3. homegenous - same datatype
// 4. hetrogenous - different datatype
// 5. starting val - index[0]
// 6. flexible - add , remove

// 1.

let mul1 = ["apple","banana","orange"]
console.log(mul1);


// 2.

let mul2 = [1,"two",true,undefined,null,{id:1},["hello"]]

console.log(mul2);

// 3. 

let mul3 = [true,true]

console.log(mul3);

// 4. 

let mul4 = ["hello",true,1,2,3]

console.log(mul4);

//5 

console.log(mul4[0]);

//6 

let mul5 = [1,2,3,,4,5]

mul5.pop()
mul5.shift()
mul5.push(5,6)
mul5.unshift(1)

console.log(mul5);


// dense array - 1 ele - index-[0] - contigous memory

// sparse array - Hash table

// object 





// multible data store
// homogenous
// hetrogenous
// flexible

// 1.
let objE = {
  uName: "ragul",
  uAge : 22,
  isPass : true,
  likeLanguage : ["html","css","js"],
  friends : {fname:"sriram",fname2:"monik"},
  play : function(){
    console.log("cricket");
  }
};


console.log(objE);
console.log(objE.play());

console.log(objE.likeLanguage[1]);
console.log(objE.friends.fname2);



// 2
 let stName = {
    uName1 : "sriram",
    uName2 : "monik",
    uName3 : "ragul"
 }

 console.log(stName);

 // 3

 console.clear();
 

 let stDetial ={
    sName :  "abc",
    age : 23,
    all : ["a","b","c"]
 }


 let vechile = {
    "type vechile" : ["two Wheeler","four wheeler"],
    "price" : 100000,
    "fuel Type": "petrol"
 }


 console.log(vechile["fuel Type"]);
 
 
// Dynamic property 

let UuName = "monik"
let UuAge = 23

let person11 = {
  uName: UuName,
  uAge: UuAge,
};

console.log(person11);

let dyn = "emId"

let person2 ={
    UuName,
    UuAge,
    [dyn] : "ifc123",
    ["dyn"] : "1234"
}

console.log(person2.dyn);


// iteration 

// for of - str array function 
// for in - obj


// for of 

let an = [10,20,30,40]

for(let aa of an){
    console.log(aa);
    
}

let st = "script"

for(let bb of st){
    console.log(bb);
    
}

function*fun(){
    yield 1
    yield 2
    yield 3
    yield 4
}

let fu = fun()

for(let cc of fu){
    console.log(cc);
    
}


// for in 

let objj = {
    uname : "a",
    uage : 4,
    is : true
}

for(let dd in objj){
    console.log(objj[dd]);
    
}

for(let ee in st){
    console.log(ee);
    
}

console.clear();



// es6 edition 

// 1.spread operator
// 2.rest operator 

// 1

// array  -[...]
// object  - {...}
// * two array or two object merge ,clone

// 2

// function - (...)

// * multiple argument parameter store


// 1. explain 

// 1. array 

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr4 = [4,5,6,6,7,8,9]

let arr3 = [...arr1,...arr2,8,9,10,...arr4]

console.log(arr3);


// 2.object 

let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}

let obj3 = {...obj1,...obj2}
console.log(obj3);

let userInfo = {
    uName : "rahul",
    uAge : 22,
    eRole : "frontend Developer"
}


let userInfo2 = {
    Name : "rahul",
    Age : 23,
    Role : "backend Developer"
}

let userInfo3 = {
    ...userInfo,
    ...userInfo2,salary : 50000
}

console.log(userInfo3);

// 2. explain

function rest(...f){
    console.log(f);
    
}

rest(10,20,30,40,50,60,70,80,90,100)

console.clear();



// destructuring 

let arr5 = [1,2,3,4,5]
console.log(arr5[0],arr5[1]);
console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5[3]);
console.log(arr5[4]);

let [a10,b6,c6,d6,e6] = arr5
console.log(a10,b6,c6,d6,e6);

let [and,bn,,,cn]= arr5
console.log(and,bn,cn);



let array1 = [1,2,3,4,5,6,7,8,9]

let [z1,z2,z3,...z4] = array1
console.log(z1,z2,z3,z4);


let nest = [[1,2,3],[4,5,6],[7,8,9]]

let [[y1,y2,y3],[y4,y5,y6],[y7,y8,y9]] = nest
console.log(y1,y2,y3,y4,y5,y6,y7,y8,y9);





















console.clear();


// array method of manipulated 

// 1.push - last element add
// 2.pop - last element remove
// 3.shift - first element remove
// 4.unshift - first element add
// 5.splice - add/remove element from specific index

// 1.push - last element add
let arr6 = [1,2,3,4,5]

arr6.push(6,7,8,9)

console.log(arr6);

// 2.pop - last element remove

let arr7 = [1,2,3,4,5]

arr7.pop()

console.log(arr7);


// 3.shift - first element remove
let arr8 = [1,2,3,4,5]
arr8.shift()
console.log(arr8);


// 4.unshift - first element add
let arr9 = [1,2,3,4,5]
arr9.unshift(0,0.1,0.2,0.3)
console.log(arr9);


// 5.splice - add/remove element from specific index
let arr10 = [1,2,3,4,5]
// arr10.splice(indexedDB,removeCount,add)
arr10.splice(3,2,1,2,3)

console.log(arr10);


let fruit3 = ["apple","banana","orange","guava","cherry"]
fruit3.splice(3,2,"kiwi","mango","apple")
console.log(fruit3);


// how to merge in array methods 

// 1.concat - merge two or more arrays
// 2.slice - copy array elements from specific index
// 3.flat - flatten nested arrays
// 4.fill - fill array elements with a static value


// 1.concat - merge two or more arrays
let Cat1 = [1,2,3]
let Cat2 = [4,5,6]

let conCat3 = Cat1.concat(Cat2)

console.log(conCat3);

// 2.slice - copy array elements from specific index

let sl = [1,2,3,4,5,6,7,8,9]
let slice =sl.slice(5,8)

console.log(slice);

// 3.flat - flatten nested arrays

let flat1 = [[1,[2,3]],[4,[[5,6]]],[7,[8,9]]]
let flat2 = flat1.flat(Infinity)
console.log(flat2);


// 4.fill - fill array elements with a static value

let fill1 = [1,2,3,4,5,6]
fill1.fill("fyf",0,1)
console.log(fill1);

console.clear();




// sorting and reversing

// 1.asccii values

let sorted = ["A","a",6,1,8,9,4,0,3,2,5,7,1100011111111111111111111111,222]

sorted.sort()

console.log(sorted);

// reversing 
let sorted1 = [1,11,67,9,10]
sorted1.reverse()
console.log(sorted1);


// includes - check if an element exists in an array

let inc = [1,2,3,4,5,6,7,8,9]
let inc1 = inc.includes(5)
console.log(inc1)

// convert to array to srting 

// 1.join 
// 2.to string 

let join1 = [1,2,3,4,5,6,7,8,9]

console.log(join1)
console.log(join1.join())

let str5 = [1,2,3,4]
console.log(str5.toString());

