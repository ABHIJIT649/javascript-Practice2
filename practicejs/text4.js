// print 1 to 100 all even number
// for(let num=0;num<=100;num++){

//     if(num%2===0){
//        console.log("num=",num);
//     }
// }

// Q2
let gameNum =25;
let userNum = prompt("guess the game number :");

while(userNum != gameNum){ //ans string so use = single
 userNum= prompt(" you enter wrong number.guess the a another number :");
}
console.log("congratulation ,you enter the right nymber");