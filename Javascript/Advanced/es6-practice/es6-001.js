let array1 = [16, 32, 64, 128, 999, 100000];
console.log(array1);

const map1 = array1.map(x => x * 2);
console.log(map1);

const map2 = array1.map(x => Math.sqrt(x));
console.log(map2);

const obj = Object.assign(array1.indexOf(array1), array1);
console.log(obj);

const obj2 = array1.map((v, i)=>({value: v, index: i}));
console.log(obj2);

const divis = array1.map(v => v % 3 === 0 ? "threesies" : v % 100 === 0 ? "hundred it is" : "NaN");
console.log(divis);

//Write a function that accepts 3 parameters name, year, and color.
//If no value is specified, the default value of year should be 2018.

function buildCar(name, color, year = 2018){
  console.log(name, year, color);
}

buildCar("tesla", "blue");

//Create an array that takes advantage of the spread syntax. Array will simply list numbers from 1 to 10.
//Include a let array = [3, 4, 5, 6] in the middle of the array.

let array2 = [3, 4, 5, 6];
let numbers = [1, 2, ...array2, 7, 8, 9, 10];

console.log(numbers);
