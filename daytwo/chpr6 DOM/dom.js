
// document.body.style.background="red";
// document.body.childNodes[1].innerText = "abcd";
let heading= document.getElementById("heading") //value return
console.log(heading);


let headings = document.getElementsByClassName("heading2");
console.dir(headings)
console.log(headings);//return html collection


let paras = document.getElementsByTagName("p") // first element
console.log(paras);//return paraghraph element 
console.dir(paras)

 let element = document.querySelector("#myId");
 console.dir(element)