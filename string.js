// let str = "Apna Collage"
// let str2='abhijit'

// console.log(str[1],str[6],str[0]);

//template 
let specalstring = `abhijitmohanty ${1+2+4}`;
console.log(specalstring);

let obj={
item:"pen",
price:10,    

}
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);


console.log("Apna Collage");
console.log("Apna \n Collage");
console.log("Apana\tCollage");

let str2= "Apna\tcollage"
console.log(str2.length);


let str = "abhijit mohanty"
str = str.toUpperCase()
console.log(str);


let str3= "ABHIJIT MOHANTY"
let newstr3 = str3.toLocaleLowerCase()
console.log(str3);
console.log(newstr3);


let str4 = "      Apna collage js     "
console.log(str4.trim());


//slice method
let str5= "197268637687"
console.log(str5.slice(1,8));

// method se hota / "+" se bi hoge
let str6="Apna";
let str7="Collage";

let res = str6.concat(str7);
console.log(res);

//replace 
let str8="hello"
console.log(str8.replace( "lo", "p"));

let ssr="ilovejs"
console.log(ssr.charAt(4));

