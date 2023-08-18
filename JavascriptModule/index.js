function changeDataJS() {
    document.getElementById('datachangeJS').innerHTML = 'The data has been changes from JS file'
}

function operations() {
    let x = 25;
    document.getElementById('getresult').innerHTML = `My age is : ${x}`
}

function addValues() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);



    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('calculate').textContent = `The final valus after addition is: ${sum}`;
    } else {
        document.getElementById('calculate').textContent = "Invalid input";
    }
}

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("constarray").innerHTML = cars;

function showName() {
    const s1 = document.getElementById('s1').value
    const s2 = document.getElementById('s2').value
    document.getElementById("showname").innerHTML = `My full name is ${s1 + ' ' + s2}`;
}

const person = {
    firstName: "Chinmaya",
    middleName: "kumar",
    lastName: "Jagadev",
    id: 5566,
    fullName: function () {
        return `${this.firstName + " " + this.middleName + ' ' + this.lastName}  and my ID is ${this.id}`;
    }
};
document.getElementById("jsObject").innerHTML = person.fullName();


let text = "Apple, Banana, Kiwi";
let slice = text.slice(7, 13);
let subStr = text.substring(7, 13)
let upperCase = text.toLocaleUpperCase()
let search = text.indexOf('Banana')
document.getElementById("original").innerHTML = text;
document.getElementById("slice").innerHTML = slice;
document.getElementById("substring").innerHTML = subStr;
document.getElementById("uppercase").innerHTML = upperCase;
document.getElementById("search").innerHTML = search;


let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("originalArray").innerHTML = fruits;

let pushedArray = fruits.push('PineApple')
document.getElementById("push").innerHTML = fruits;

let popArray = fruits.pop()
document.getElementById("pop").innerHTML = fruits;

let shiftArray = fruits.shift()
document.getElementById("shift").innerHTML = fruits;

let lengthArray = fruits.length
document.getElementById("length").innerHTML = lengthArray;

let sortedArray = fruits.sort()
document.getElementById("sort").innerHTML = fruits;


let numbers = [1, 5, 10, 30, 0, -1];
const data = numbers.map((i) => i * 2)
document.getElementById("originalArrayMap").innerHTML = numbers;
document.getElementById("map").innerHTML = data;

let date = new Date();

document.getElementById("originaldate").innerHTML = date.toDateString();

document.getElementById("originaldateyear").innerHTML = date.getFullYear();

let setYear = date.setFullYear(2020, 11, 3);
let setDate = new Date(setYear);

document.getElementById("originaldateyearset").innerHTML = setDate.toDateString();


let hello = "";
hello = (val) => "Hello " + val;
document.getElementById("arrowfunction").innerHTML = hello("Chinmaya Jagadev!");