// Unterschied const/var
let myName = "Hans-Peter";
console.log("Hello my name is ", myName);
myName = "Angela";
console.log("Hello and my name is ", myName);

// Einfache Datentypen in JavaScript
const myString = "Hello"; // 'Hello';
const combinedStr = myString + " World"; // Hello World
const secondString = `${myString} World`; // Hello World

const myNumber = 10.1111;
const myBoolean = true; // true oder false
const myUndefined = undefined;
const myNull = null;

// Arrays
const myArray = [10, "myString", myString, myNumber];
const myArrayLength = myArray.length;
console.log("Länge des Arrays vor dem push ", myArrayLength);
myArray.push("August");
console.log("Länge des Arrays nach dem push ", myArray.length);

myArray.forEach((myValue, myIndex) => {
  console.table(`Mein ${myIndex}. Element im Array: ${myValue}`);
});

const myIndexArray = myArray.map((myValue, myIndex) => {
  console.table(`Mein ${myIndex}. Element im Array: ${myValue}`);

  return myIndex * 2;
});

console.log(myIndexArray);

// JavaScript Objekte
const myUser1 = {
  name: "Hans",
  familyName: "Peter",
  username: "hans58",
  age: 58,
  catgeories: ["sports", "coffee"],
  email: "p@hotmail.de",
};
const myUser2 = {
  name: "Angie",
  familyName: "Peter",
  username: "angie58",
  age: 58,
  catgeories: ["reading", "coffee"],
  email: "p@hotmail.de",
  emails: ["p@hotmail.de", "1@web.de", "2@web.de"],
};

const myUsers = [myUser1, myUser2];

const myUsernames = myUsers.map((myValue) => {
  return myValue.username;
});

function onButtonClick() {
  document.getElementById("myHeader").innerHTML = "Hallo von AWS-23-10";
}
