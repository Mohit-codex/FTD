console.log("working on fetch (get) and post api");



async function getapi(){
     let response= await fetch("https://jsonplaceholder.typicode.com/posts");
let data= await response.json();
console.log(data);
}

async function postdata(){
 let response= await fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "i am mohit and i am from bhawanpura bharatpur rajasthan",

  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
let data= await response.json();
console.log(data);
}


async  function myvalues(){
    await postdata();
    await getapi();
}

myvalues();