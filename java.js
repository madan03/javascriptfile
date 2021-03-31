// 1. ways to print in javascript//

//console.log("Hello World");
//comment use //
//alert("xss");
//document.write("this is document write")

//2. Javascript console API//
/* //multiline comment use//
    console.log("Hello World", 5 + 4);
    console.warn("this is warning");
    console.error("this is error");
*/

//3. Javascript Variables//
/*
    //what are variables? = containers to store date values

        var num1 = 12;
        var num2 = 23;
        //console.log(num1 + num2);

//4. Data types in javascript
    //4.1 number
        var number1 = 23;
        var number2 = 32;
        //console.log(number1 + number2);
    //4.2 string
        var str1 = "this is a first string";
        var str2 = 'this is a second string';
    //4.2 objects
        var marks = {
            ram: 69,
            syam: 34,
            madan: 50,
        }
        //console.log(marks);
        //console.log(marks[0]);

    //4.3 Booleans
        var a = true;
        var b = false;
        //console.log(a);

    // var und = undefined;
    //var und;
    //console.log(und);

    //var n = null;
   //console.log(n);
   */

/*At a very high level, There are two types of data types in Javascript
1.Primitives data types:undefined, null, number,string,boolean,symbol
2.Reference data types:Arrays and objects
*/
//array symbol  []
//var arr = [1,2,3,"Madan",5]
//console.log(arr[3]);


//5.operator in javascript

//5.1 Arithmetic operator

//var a = 46;
//var b = 43;
/*
console.log("The value is a+b :" , a+b);
console.log("The value is a-b :" , a-b);
console.log("The value is a*b :" , a*b);
console.log("The value is a/b :" , a/b);
*/
//5.2 Assignment operator

/*
    var c = 40;
    var d = c;
    d += 2;
    d -=2;
    d *=2;
    d /=2;
    console.log(d);
*/

//5.3 comparision operator:

/*
var x = 20;
var y = 30;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);
*/

//5.4 Logical Operator:

//5.4.1 logical AND operator (&&):

/*
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
*/
//5.4.2 logical OR operator (||):

/*
console.log(true || true);
console.log(true ||false);
console.log(false || false);
console.log(false || true);
*/
//5.4.3 logical NOT operator (!)

/*
console.log(!true);
console.log(!false);
*/
//6.fuction in javascript

/*
function avg(x, y){
    //return(x + y)/2;
    z = (x+y)/2
    return z;
}
z = avg(2,3);
console.log(z);
*/

//7.conditions in javascript

//var age = 43;
//7.1 if statement:

/*
if (age > 32){
    console.log("you are young");

}*/
//7.2 if else statement:

/*
if (age > 44){
    console.log("you are young");

}
else{
    console.log("you are not young");
}
*/
//7.3 if else-ladder

/*
var age = 2;
if (age > 15){
    console.log("you are not kid");

}
else if (age > 10 ){
    console.log("you are not a kid");
}
else{
    console.log("you are kid");
}
*/

//8 LOOP JAVASCRIPT
//8.1 FOR

/* 
var arr =[9,8,7,6,5,3,2];
console.log(arr);
for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

var arr = [9,8,7,6,5,4,3,2]
arr.forEach(function(element){
    console.log(element)
})
*/
//8.2 WHILE LOOP :

/*
var arr = [1,2,3,4,5,6,7,8]
let j = 3;
const a = 0;
while( j< arr.length){
    console.log(arr[j]);
    j++;
}
*/

//8.3 do while:

/*
do {
    console.log(arr[j]);
    j++;
}
while(j<arr.length);
*/
/*
//9 Break statement:

var arr =[9,8,7,6,5,3,2];
console.log(arr);
for (var i=0;i<arr.length;i++){
    if (i == 2){
        break;
    }
    console.log(arr[i]);
}
//10 continue statement:

var arr =[5,6,7,8,9,4,3];
console.log(arr);
for (var i=0;i<arr.length;i++){
    if ( i == 2){
        continue;
    }
    console.log(arr[i]);
}
*/
//11 Array Methos 

//let newArr = [ "Fan", "Camera", 34 , null, true];
//console.log(newArr.length);
//newArr.pop();
//console.log(newArr);//true pop
//newArr.push("Hari");
//console.log(newArr);//push Harry
//newArr.shift();
//console.log(newArr);//shift Fan
//newArr.unshift("Hari");
//console.log(newArr);//add Hari = fan in first

//Other array methods:
   // https://www.w3schools.com/js/js_array_methods.asp

//12 String Methods in javascript: 

//let newstring = "Ram is Beautifull";
//console.log(newstring.length)
//console.log(newstring.indexOf("is"))
//console.log(newstring.slice(1,3));
//d = newstring.replace("Ram" , "xyz");
//console.log(d , newstring);

//Other String Methos:
    //https://www.w3schools.com/js/js_string_methods.asp

//13 Dates in Javascript//
/*
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());//second
console.log(myDate.getDate());//Date
console.log(myDate.getFullYear());//Year
console.log(myDate.getHours);//hour
*/

//DOM Manipulation 
/*
let elem = document.getElementById('click');
//console.log(elem);

let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");

console.log(elem.innerHTML);
console.log(elem.innerText);


console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
*/
//tn = document.getElementsByTagName('div');
//console.log(tn);
//tn = document.getElementsByTagName('div');
//console.log(tn);

// events in javascript
/*
function clicked(){
    console.log('The button was clicked');
}
function myFunction(){
    alert("The button is clicked");
}
*/

//Arrow Funtion

//function summ(a,b){
 //   return a+b;
//}

//summ = (a,b)=>{
//    return a+b;
//}

//SetTimeout and setinterval
/*
logkaro = ()=>{
    console.log(" I am your Log")
}

setTimeout(logkaro, 2000);

*/
// Javascript Localstorage
/*
localStorage.setItem('name', 'hari');
localStorage
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();
*/

//JSON(javascript object notation)
/*
obj = { name: "hari", length:1 , a:{this:'that'}}
jso =  JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(` { "name": "hari", "length":1 , "a":{"this":"that"}}`);
console.log(parsed);
*/


