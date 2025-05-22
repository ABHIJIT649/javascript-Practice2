// Function
function myFunction(){
    console.log("Wellcome");
    console.log("Apna Collage");
}

myFunction(5);

//parameter -> input
function abhiFun(msg , n){//parameter
console.log(msg,n);
}

abhiFun("i love js","i heat c++"); //argument

// function -> number ,sum

function sum(x,y){
     
   console.log(x+y);
}

sum(4,6);

//return
function rtn(a,b){
    //local variable -> scope
s = a+b;
return s;
}

let val = sum(3,4);
console.log(val);

//Arrow function

function add(a,b){
    return a+b;
}

let s = add(5,6);
console.log(s);

function mul(x,y){
    return x*y;
}

let m=mul(7,8);
console.log(m);


//short function morden js
const arrowSum =(x,y)=>{
    // console.log(x+y);
    return x*y;
}

let a = arrowSum(5,7);
console.log(a);

//Arrow function multiplication

const arrowMulti=(x,y) =>{

    console.log(x*y);
}

arrowMulti(6,7);

//for ecach in array
let arr = ["delhi","odisha","kalahandi","bhubaneswar"]

arr.forEach( (val ,idx,arr)=>{
    console.log(val.toUpperCase(),idx ,arr);
})
