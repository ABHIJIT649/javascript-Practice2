// let h2 = document.querySelector("h2")

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna collage"


let divs = document.querySelectorAll(".box");

//best tecniqe
let idx=1;
for(div of divs){
    div.innerText = ( `new uniqe value ${idx}`);
    idx ++;
}


//random tecniqe
// divs[0].innerText = "new uniqe vale box1"
// divs[1].innerText = "new uniqe vale box2"
// divs[2].innerText = "new uniqe vale box3"

// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);