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


function myFunction(a, b) {
    return a * b;
}
let x = myFunction(4, 4);
document.getElementById("functions").innerHTML = x;


const personcall = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1call = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

document.getElementById("callfun").innerHTML = personcall.fullName.call(person1call, "Oslo", "Norway");

const personapply = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

document.getElementById("applyfun").innerHTML = personapply.fullName.apply(person1);


const personbind = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = personbind.fullName.bind(member);
document.getElementById("bindfun").innerHTML = fullName();

let objectJS = {
    firstname: "Chinmaya",
    lastname: "Jagadev",
    age: 25,
    eyecolor: "blue"
};
document.getElementById("object").innerHTML = objectJS["firstname"] + " is " + objectJS["age"] + " years old.";

objectJS.nationality = "Odia";
document.getElementById("insertObject").innerHTML = objectJS.firstname + " is " + objectJS.nationality + ".";


const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
document.getElementById("nestedObj").innerHTML = myObj["cars"]["car2"];

document.getElementById("stringify").innerHTML = JSON.stringify(objectJS);

function Construc(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Odia";
}

const myFather = new Construc("John", "Doe", 50, "blue");
const myMother = new Construc("Sally", "Rally", 48, "green");

// Display nationality
document.getElementById("constructors").innerHTML =
    "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

document.getElementById("sets").innerHTML = letters.size;


const fruitsMap = new Map();

fruitsMap.set("apples", 500);
fruitsMap.set("bananas", 300);
fruitsMap.set("oranges", 200);

document.getElementById("mapObj").innerHTML = fruitsMap.get("oranges");

document.getElementById("key").innerHTML = Object.keys(objectJS);

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("classes").innerHTML =
    myCar1.name + " " + 'at' + " " + myCar1.year + " " + myCar2.name + " " + 'at' + " " + myCar2.year;


function myDisplayer(some) {
    document.getElementById("async").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5, 5);


setTimeout(function () { myFunction("I am a Software Developer !!!"); }, 3000);

function myFunction(value) {
    document.getElementById("callback").innerHTML = value;
}



function myDisplayer(some) {
    document.getElementById("promise").innerHTML = some;
}
let myPromise = new Promise(function (myResolve, myReject) {
    let x = 1;
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I Love Technologies !!");
    });
    document.getElementById("asyncAwait").innerHTML = await myPromise;
}

myDisplay();


const element = document.getElementsByTagName("span");
document.getElementById("dom").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

document.getElementById("bom").innerHTML = "Available screen width and height are " + screen.availWidth + ' ' + screen.height + ' ' + 'respectively';

document.getElementById("location").innerHTML = "This Page path name is: " + window.location.pathname;

function goBack() {
    window.history.back()
}

function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed this button!";
    } else {
        txt = "You cancel this fucntion!";
    }
    document.getElementById("alert").innerHTML = txt;
}

function myFunction() {
    let text;
    if (document.getElementById("idApi").validity.rangeOverflow) {
        text = "Value too large";
    } else {
        text = "Input OK";
    }
    document.getElementById("api").innerHTML = text;
}

function myFunctionGo() {
    window.history.go(-2);
}

sessionStorage.setItem("name", "Chinmaya Jagadev");
document.getElementById("session").innerHTML = sessionStorage.getItem("name");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.getElementById("fetch").innerHTML = myText;
}
getText("./fetch.txt");


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("ajax").innerHTML = this.responseText;
    }
    xhttp.open("GET", "demo_get.asp");
    xhttp.send();
}


const myObjJSON = { name: "John", age: 30, city: "New York" };
myObjJSON.name = "Gilbert";
document.getElementById("json").innerHTML = myObjJSON.name;

const textParse = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(textParse);
document.getElementById("parse").innerHTML = myArr[0];


const stringify = {name: "John", today: new Date(), city: "New York"};
const myJSONStringify = JSON.stringify(stringify);
document.getElementById("str").innerHTML = myJSONStringify;