let btn =document.querySelector(".btn");

btn.addEventListener("click",() => {
    console.log("button was clicked -1");
});

btn.addEventListener("click",() => {
    console.log("button was clicked -2");
});



//handler remove process
const handler3 =  () => {
    console.log("button was clicked -3");
};
btn.addEventListener("click",handler3)

btn.removeEventListener("click",handler3)




btn.addEventListener("click",() => {
    console.log("button was clicked -4");
});

btn.removeEventListener("click",)