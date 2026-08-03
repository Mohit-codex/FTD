// change in css using js
let sdiv=document.querySelector('#sdiv');
console.log(sdiv);
console.log(sdiv.style);
sdiv.style='background-color:red;border:1px solid black;';
sdiv.style.color='yellow';
let tdiv=document.querySelector('#tdiv');
console.log(tdiv);
// for styling mutliple inline properties
console.log(tdiv.style.cssText);
tdiv.style.cssText='background-color:pink;border:1px solid black;';

// <1.>          setAttribute()
let addpara=document.createElement('p');
console.log(addpara);
addpara.textContent="i am mohit lodha";
addpara.setAttribute('id','newid');
addpara.setAttribute('class','newclass');
let xelement=document.querySelector('#tdiv');
console.log(xelement);
xelement.appendChild(addpara);
console.log(xelement);
 addpara.style.backgroundColor='aqua';
addpara.style.cssText='color:brown;backgroundcolor:green; font-size:2rem; text-align:center';
// <2.>      className
addpara.className='class my name is mohit';
console.log(addpara);
console.log(document.querySelector('.class'));
console.log(document.querySelector('.mohit'));
// <3.>  classList -it returns collection of class inside a array
console.log(addpara.classList);
// <a> add
addpara.classList.add('first');
addpara.classList.add('second');
addpara.classList.add('third');
console.log(addpara.classList);
// <b> remove
addpara.classList.remove('third');
console.log(addpara.classList);
// <c> toggle
addpara.classList.toggle('third');
console.log(addpara.classList);
addpara.classList.toggle('first');
// <d> contains
console.log(addpara.classList.contains('first'));
console.log(addpara.classList.contains('second'));
// BROWSER EVENT