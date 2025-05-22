function countVowel(str){
    //"ApnaCollage",count=5
let count =0;

    for (let char of str){
   if(
     char === "a"||
     char === "e"||
     char === "i"||
     char === "o"||
     char === "u")
     {
    count++;
   }
    
  
    }
 console.log(count);
}

 countVowel("apna college")


//arrow function
const countvlw=(str)=>{

    let count =0;

    for (let char of str){
   if(
     char === "a"||
     char === "e"||
     char === "i"||
     char === "o"||
     char === "u")
     {
    count++;
   }
    
  
    }
 return count;
}

let str = countvlw("abhijit")
console.log(str);



