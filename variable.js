let num = 10;
var num1 = 10;
const num2 = 11.5;
num =15;
num1 =20;

console.log("This is number:" + num)
console.log("This is javascript log:" + num)
console.log("variable:" + num1)
console.log("Matrix:" + num2)
console.log("Font value:"+ num2)
console.log("Font value:"+ num2)
console.log("Font value:"+ num2)
console.log("Font value:"+ num2)

console.table(num, num1, num2);
console.table(num, num1, num2);
console.table(num, num1, num2);
console.table(num, num1, num2);
console.table(num, num1, num2);
console.warn(num, num1, num2);
console.assert(num, num1, num2);

let name = 'Mukul';
console.log(name); 
name = 'Rahul';
console.log(name); 
let org_name;
org_name = "GeeksforGeeks";
console.log(org_name); 

const arrowFunc = () => {
    console.log("Declared using the arrow functions");
    console.log("We are learning about arrow Function")
}
arrowFunc();

const name1 = 'GeeksforGeeks';
console.log('Printed by using Template Literal');
console.log(`My name is ${name1}`);

const arr = ['lionel', 'messi', 'barcelona'];
let[value1,value2,value3] = arr;
console.log(value1, value2, value3);

function fun(a, b=1){
	return a + b;
}
console.log(fun(5,2));
console.log(fun(3));

class Vehicle{
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
}
 
const bike1 = new Vehicle('Ninja ZX-10R','998cc');
const bike2 = new Vehicle('Duke','390cc');
console.log(bike1.name);
console.log(bike2.name);

function fun(...input){
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));
console.log(fun(1,5,7,8,9,6));

const myArr = [5, 55, 33, 9, 6]
for(let element of myArr){
    console.log(element);
}

const Arr =[2, 5, 56, 9, 7, 8]

console.log(Arr)

const myMap = new Map([
    ["stringKey", 23], 
    [48, "numberedKey"]
]);
myMap.set(false, 0);
myMap.set(1, true);
console.log(myMap.get("stringKey"), 
    myMap.get(48), myMap.get(false), 
    myMap.get(1));

    const mySet = 
    new Set(["string value", "string value"]);
mySet.add(24);
mySet.add(24);
mySet.add(3);
console.log(mySet);



 
