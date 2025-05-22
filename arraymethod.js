
//push() method (add in aray end)
let hero =["ironmam","hulk","thor","wanda","strange"]

hero.push("panther","flash")

console.log(hero);

//pop() method (delet in last array)
let cars = ["suzuki","hunda","tayota","bmw","volvo"]
console.log(cars);

let delet = cars.pop()
console.log(delet);



// to string () method (add two string)

let car = ["suzuki","hunda","tayota","bmw","volvo"]

console.log(car);
console.log(car.toString());

//concat() method (joint multipul array)
let marvel=["doom","spidy","thor","moonknight"]

let dc = ["flash","superman","batman"]

let bolowod = ["krish","saktiman"]

let heros = marvel.concat(dc , bolowod);
console.log(heros);


//unshit() method (add in array first)
let seasion =["summer","reany","winter"]
seasion.unshift("black")
console.log(seasion);

//shift() method (delet in array first)

let vegs = ["potatao","ledisfinger","cucumber"]
vegs.shift();
console.log(vegs);

//slice() method(chooce index show)
let number = [78,66,45,9,66,]
console.log(number);
console.log(number.slice(1,3));

//splice() method
let hro =["ironmam","hulk","thor","wanda","strange"]

hro.splice(2,2,"krish","saktiman")
console.log(hro);