// let mark = [97,82,77,85,90,66,76]
// console.log(mark);
// console.log(mark.length); //property


//for loop
let student_name = ["tony stark","hulk","thor","rocket","wanda","panther"]

for(let i =0;i<student_name.length;i++){
    console.log(student_name[i]);
}

//for of
for(let el of student_name){
    console.log(el);
}

let citys = ["delhi","odisha","hydrabad","mumbai"]
for(let city of citys){
    console.log(city.toUpperCase());
}