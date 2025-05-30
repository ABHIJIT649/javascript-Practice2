let newBtn = document.createElement("button");

newBtn.innerText = "clic me";

console.log(newBtn);

//div ke under last me
// let div = document.querySelector("div");
// div.append(newBtn);

// div ke under first me
// let div2 = document.querySelector("div");
// div2.prepend(newBtn);


//div ke bahar jut before first me
// let div2 = document.querySelector("div");
// div2.before(newBtn);


//div ke bahar jut after last me
// let p = document.querySelector("p");
// p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "hi! i am Abhijit";

document.querySelector("body").prepend(newHeading);




