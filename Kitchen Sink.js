let name = "Eric Moran";  //this string contains my name

const states = 50;  //this constant called states contains the number of states

var sum = 4+5;  //computes the sum of 4 and 5 and stores the result in a variable called sum
console.log("The sum is " + sum);

function sayHello() {  //this defines the function called sayHello, which contains no parameters

    return "Hello!";  //this defines what is returned when the function is called
}

sayHello();  //this will run the sayHello function, expected output is "Hello!"

function checkAge(name, age) { //this function checks whether the entered age is <21, ==21, >21 and changes the message based on the input
    if (age == 21) {
      return "Grats " + name + " enjoy being 21 while it lasts";
    }
    if (age > 21){
        return name + ", you are old enough to view this page!";
    }    
    if (age < 21) {
        return "Sorry " + name + ", " + age + " isn't old enough to view this page!";
    }
    return "The checkAge function did not work as expected :(";
  }

console.log(checkAge ("Charles", 21));  //these call the checkAge function with a few test cases: <21, ==21, >21
console.log(checkAge ("Abby", 27));
console.log(checkAge ("James", 18));
console.log(checkAge ("John", 17));

let vegetables = ["spinach", "bell peppers", "onion", "eggplant", "tomato", "zucchini"];  //this creates an array with my favorite vegetables

for (let i = 0; i < vegetables.length; i++) { //this for loop iterates over the vegetables array and logs each entry.  i works as the iterating variable, and the index, thus going through every entry in the array
    console.log(vegetables[i]);
}

let pet = { // this object named pet contains the name and breed properties for my
    name: 'Lizzie',
    breed: 'Chihuahua-Daschund',
}

console.log("My pet's name is " + pet.name + ", and she is a " + pet.breed); //this logs to the console the properties of the pet object

let p1 = {  //these objects contain name and age properties to be added into an array later
    name: 'Eric',
    age: '30'
}
let p2 = {
    name: 'Joe',
    age: '7'
}
let p3 = {
    name: 'Risa',
    age: '20'
}
let p4 = {
    name: 'Rich',
    age: '56'
}
let p5 = {
    name: 'Sharon',
    age: '54'
}

let family = [p1, p2, p3, p4, p5]; //this array contains the 5 objects previously initialized containing names and ages


for (let i = 0; i < family.length; i++) { //this loop runs through the array of people calling the checkAge function for each element in the array
    console.log(checkAge(family[i].name,family[i].age));
}

let str = "Hello World"; //this initializes a string for the getLength function

console.log(getLength(str)); //this logs the result of the getLength function


function getLength(str) { //this function checks if the length of a string is even or odd
    if (str.length %2 == 0) {
      return "The world is nice and even!";
    }
    return "The world is an odd place!";
  }