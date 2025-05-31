let btn1 = document.querySelector("#btn1");


btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);

};
btn1.onclick = (evt) => {
   console.log(evt);
   console.log(evt.type);
   console.log(evt.target);

};


let box1 = document.querySelector(".box1")

box1.onmouseover= ()=>{
    console.log("this is my box");
};