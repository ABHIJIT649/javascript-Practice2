// practice Q10

let mark = [99,92,88,80,90,92,91,95];

let newMark = mark.filter((val)=>{
  
    return val >90;

});

console.log(newMark);

//

let n = prompt("enter any number : ")

let arr =[];

for(let i=1; i<=n; i++){
    arr[i-1]= i;
}
console.log(arr);
  //sum of array
let sumArray = arr.reduce((prev,curr)=>{
    return prev+curr;
})

console.log(sumArray);

//factorial of number

 let factorial = arr.reduce((prev,curr)=>{
    return prev*curr;
 })

 console.log(factorial);