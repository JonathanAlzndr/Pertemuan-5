//Menginisialisasi variabel
// number = 10;
const number2 = 20;
const number3 = 30;

var number1;

//Mengeluarkan output dilayar
console.log(number1);
console.log(number2);

//Tipe data

let x;
console.log(typeof(x)); //Undefined data type

let number = 10;
console.log(typeof(number)); //Number data type

let text = "Hello";
console.log(typeof(text)); //String data type

let y = true;
console.log(typeof(y)); //Boolean data type

let data = null;
console.log(typeof(data)); //Null data type (dari javascript langsung membuat variabel dari data ini object)

const car = {
    color: "red",
    price: 100000000,
};

const arr = [1, 2, 3, 4, 5]; //Tipe data array
console.log(arr);
console.log(arr[0]);


//Perulangan for mencetak array
console.log("Mencetak Array");
for(let i = 0; i < arr.length; i++){ 
    console.log(arr[i]);
}

//Operator komparasi tidak hanya membandingkan nilainya namun juga tipe datanya
const text1 = "Hello";
const text2 = "Hello";

console.log("Operator komparasi");
console.log(number2 == number3);
console.log(number2 == number3);
console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);
console.log(text1 === text2);

const aString = "10";
const aNumber = 10;

console.log(aString === aNumber);


console.log("Logical Operator")

console.log(number2 > 25 && number3 < 25);
console.log(number2 > 25 || number3 < 25);

console.log("If else");
let language = "";

if(language === "English") {
    console.log("English");
} else if (language === "Bahasa Indonesia"){
    console.log("Bahasa Indonesia");
} else {
    console.log("Deutsch");
}

console.log("Function in Javascript");

function greetings(name) {
    console.log(`Hello ${name}`);
}

greetings("Jonathan");