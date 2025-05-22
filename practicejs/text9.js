let num = [2,4,5,1,9,7,6,78,45,24,25]

num.forEach((num)=>{
    console.log(num*num); //num*2

})


//map method in array creat new array
let numb = [2,43,44,5,6,77,9,90]

let newArray=numb.map((val)=>{
    return val*val;
})

console.log(newArray);
//

//filter method
let arr =[1,2,3,4,5,6,7,8,9,10];

let evenarr = arr.filter((val) => {
     return val %2 === 0;
});

console.log(evenarr);


//reduce method
 let arry = [1,2,3,4,]

 const output = arry.reduce((prev ,curr)=>{
    return prev+curr;
 })

 console.log(output);//10

 //largest number an array

 let array = [4,5,6,7,8,2]

 const largest = array.reduce((prev ,curr)=>{
    return prev > curr ? prev : curr;

    // if(prev > curr){
    //     console.log(prev);
    // }
    // else{
    //     console.log(curr);
    // }
 })

 console.log(largest);//8 

