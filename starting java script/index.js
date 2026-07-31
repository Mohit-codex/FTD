// console.log("this is my first js code");
// console.log("this is my second line");
var a=10;
console.log(a);
function example(){
    var b=100;
    console.log(a);
    console.log(b);
}
example();
// console.log(b);
var a="mohit";
 console.log(a);
 a="syaam"
  console.log(a);
  let num=20;
   num=40;
   console.log(num);
{
    let d=10;
     console.log(num);
}
//  console.log(d);
const c=200;
 console.log(c);
//  const c=12;
//  c=29;
console.log(typeof(c));
console.log(typeof(a));
if(true){
     console.log(c);
}
// logical opeartor
console.log(null || 6 ||'mohit' ||7);
console.log(true && 'mohit');
console.log(false && 'mohit');
console.log(false || 'mohit');
// ternary operator
let b=10;
console.log(a>b?'i am adult':'i am not a adult');
// bitwise operator
// bitwise and
console.log(2&5);
// bitwise or
console.log(2|5);
// bitwise xor
console.log(2^5);
// left shift
console.log(10<<2);
// right shift
console.log(32>>5);
let nun =23;

if(nun<0){
    console.log('invalid age');

}
else if(nun<18){
     console.log('you are a minor');
}
else if(nun>=18){
    console.log("you are allowed in party")
}
switch(nun){
    case 10:
     console.log('invalid age');
        break;
    case 20:
     console.log('you are a minor');  
         break;
     case 23:  
      console.log("you are allowed in party");
      break;
      default:
        console.log("you have done some mistake");  
}
// for loop using break and continue statements
for(let i=0;i<=10;i++){

    if(i%2==0){
        // console.log(i);
        continue;

    }
    else if(i>8){
    
        break;
    }
    else{
        console.log(i);
    }
}
// while loop
let pink=1;
while(pink<=20){
    console.log(pink);
    pink++;
}
// do while loop
let m=0;
do{
    console.log(m);
    m++;
}while(m<9);
// string in js
let str1="mohit ";
let str2="kumar";
let ans=str1+str2;
console.log(ans);
let ans1=`${str1}and ${str2}`;
console.log(ans1);
let str3=`i am
iron man
and i have forgotted 
my power`;
console.log(str3);
console.log(str3.length);
let str4="dinesh kumar lodha bhawanpura wale";
console.log(str4.substring(5,20));
console.log(str4.charAt(10));
console.log(str4.split(' '));
let str5=['dinesh', 'kumar', 'lodha', 'bhawanpura', 'wale']
console.log(str5.join('-to-'));
// <-----function in js---->
function average(a,b){
    return (a+b)/2;
}
let avg =average(10,20);
console.log(avg);
// variable function
let average1=function (a,b){
    return (a**b);
}
const add = (a, b) => {
  return a + b;
};
let obj= add(10,50);
console.log(obj);
// use of object type reference datatype
let refObject={
    name:'mohit',
    class:'b.tech cse b',
    rollno:252402140,
    department:"computer science and engineering",
    greet:function(){
        console.log("i hope you guys are doing well");
        return "you are a nice guys than me";
    }
};
console.log(refObject);
let me=refObject.greet();
console.log(me);
// array and declaration of arrays
let arr=[null,"rampur",20,12,'mohit'];
console.log(arr);
console.log(arr[2]);
console.log(arr[1]);
console.log(arr[4]);
// array constructor
const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
let arrays= new Array(12,"rampur machhali",null,false,34);
console.log(arrays);
// <1> push()
arrays.push(100);
arrays.push(200);
arrays.push(300);
console.log(arrays);
// <2> pop()
arrays.pop();
arrays.pop();
console.log(arrays);
// <3> shift()
arrays.shift();
arrays.shift();
console.log(arrays);
// <4> unshift()
arrays.unshift("rameswaram");
arrays.unshift(101);
console.log(arrays);
// <5> slice
arrays.slice(1,3);
console.log(arrays);
console.log(arrays.slice(1,3));
console.log(arrays.slice(1,6));
// <6> splice
arrays.splice(1,3,'ram','syam','ghansyam');
console.log(arrays);
// <7> map
let Arrays = [10,20,30,44,13,99];
let newarray = Arrays.map((ram)=>{
    return ram*ram;

})
console.log(newarray);
let old=Arrays.map((num)=>{
    return num+100;
})
console.log(old);
 Arrays.map((number,index)=>{
    console.log("number will be",number);
    console.log("index will be",index);
 })
// <8> filter
// use of filter to find even and odd number
let evenarray=Arrays.filter((num)=>{
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
})
console.log(evenarray);
let oddarray=Arrays.filter((number)=>{
    if(number%2===0){
        return false;
    }
    else 
    {
        return true;
    }
})
console.log(oddarray);
// use of filter to find string
let findsting=arrays.filter((num)=>{
    if(typeof(num)=='string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(findsting);
// <9> sorting
let sortedArray=Arrays.sort();
console.log(sortedArray)
// <10> reduce
// accumulator and current value
let sumof=Arrays.reduce((accu,curr)=>{
    return accu+curr;
},0);
console.log(sumof);
// <11> find 
const findValue =Arrays.find((num)=>num>20
);
console.log(findValue);
// forEach-- traversion of element of array
let trav=Arrays.forEach((val)=>{
    console.log(val);
})
// for in
let object={
    name:"sandeep meetha",
    gender:"transgender",
    class:"pata nhi",
    work:"chhinarpantti",
    speciality:"paise lootna"
};
for(let key in object){
    console.log(key);
     console.log(object[key]);
}
let nameString="raja ka beta raja hota h";
for(let name of nameString){
    console.log(name);
}
let charr=[10,20,30,40,50,60,70];
for(let name of charr){
    console.log(name);
}
// arrays in function
let p=[10,20,30,40,50,60,70,1111,2342,3545,800];
let len=p.length;
function sandeep(m){
    sum=0;
    for(let i=0;i<len;i++){
        sum=sum+m[i];
    }
    return sum;
}
let mandeep=sandeep(p);
console.log(mandeep);
// function and variable(var keyword only) hosting
console.log(ram);
var ram="ramkumar";

m1();
function m1(){
    console.log("we are doing function hoisting");
}
// class(blueprint) and object(instance of class)
class human{
    age;   //public data member by default
    gender="male";  //public  data member
    #city="bharatpur"; //private data member


    // -----constructor------
    constructor(newAge,newGender,newCity){
        this.age=newAge;
     this.#city=newCity;
     this.gender=newGender;
    }

    // ------member function----
    walk(){
        console.log("human can walk");
        this.#run();
    }
    // ---private function---
    #run(){
        console.log("Ussain Bolt is the fastest runner of earth");

    }
    changecity(a){
        this.#city=a;
    }
    // setter and getter function
    get fetchCity(){
        return this.#city;
    }
    set newAge(ageis){
        this.age=ageis;
    }

}
 let m2 =new human(20,"male","noida");
 console.log(m2.age);
  console.log(m2.gender);
  m2.walk();
  console.log(m2.fetchCity);
  m2.newAge=100;
  console.log(m2.age);
  m2.changecity("mumbai");
    console.log(m2.fetchCity);
    // -----default parameter----

    function m6(n1="yadav",n2=n1.toUpperCase()){
        console.log("my name is :",n1,n2);
    }
    m6();
    m6("mohit","kumar");
    m6("akash");
    // arrays as default parameter
    function m5(n1=[10,20,30,40,50,60]){
        console.log("my name is :",n1);
    }
    m5();
    m5("mohit");
    m5("akash");
     // object as default parameter
    function m3(n1={
        age:100,
        gender:"male",
        breed:"indian"
    }){
        console.log("my name is :",n1);
    }
    m3();
    m3("mohit");
    m3("akash");
  //function as default parameter
        function m11(number){
            return number*number;
        }

    function m10(n1=m11(10)){
        console.log("my name is :",n1);
    }
    m10();
    m10("mohit kumar");
    m10("prakash");
    // fuction are called first class citizen
    // <1>returning a function
    function raja(){
        return function(number){
return number*number;
        }
    }
    let n1=raja();
    let n2=n1(10);
    console.log(n2);
    // <2>arrays of function
    let n3=[function(a,b){
        return a+b;},function(a,b){
        return a-b;},function(a,b){
        return a*b;},function(a,b){
        return a/b;}];
        let n4=n3[2];
        let n5=n4(10,20);
        console.log(n5);
        // <3> function inside a object we have seen it earlier
        // <4> function as arguement
        function n6(a,b){
       return a+b;
        }
        function n7( c,d){

console.log(c);
console.log("myself:",d);
        }
        n7(n6(10,20),"mohit kumar");