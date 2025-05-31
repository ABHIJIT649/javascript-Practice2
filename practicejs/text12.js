let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = "light" //dark

mode.addEventListener("click",()=>{
    if (currMode === "light"){
        currMode="drak" //light
        body.classList.add("dark")
        body.classList.remove("light") //remove after dark mode 

        // document.querySelector("body").style.backgroundColor="black"
    }else {
        currMode = "light"; //dark
        body.classList.add("light");
        body.classList.add("dark");
        //  document.querySelector("body").style.backgroundColor="white"
    }

    console.log(currMode);
});