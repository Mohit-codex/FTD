console.log("using api");
const getbutton=document.querySelector('.fbutton');
const firstpara=document.querySelector('#fpara');
document.addEventListener('click',getapi);
async function getapi(){
    const url="https://jsonplaceholder.typicode.com/posts";
    const response= await fetch(url);
    // console.error(response);
    const data= await response.json();
    firstpara.textContent=data[2].title;
    
}
// above code can be written with the help of promise
