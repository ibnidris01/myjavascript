const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number){
    return number * 2;
});
console.log(doubled); 


//immutable data
let numbers1 = [1, 2, 3];

// numbers1.push(4);
const newNumbers = [...numbers1, 4];

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'gaming', 'coding']
};

stundent.age = 22;
console.log(student);

// hof
function greet(name) {
    return "Hello" + name;
}
function processUser(name, callback) {
    return callback(name);
}

console.log(processUser('Awet', greet));

function mutiplier(number){
    return function(value){
        return value * number;
    };
}

const double = mutiplier(2);
console.log(double(5));

const triple = mutiplier(3);
console.log(triple(5));

// map 
const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2.map(numbers => numbers * 2);
console.log(result);


function creatingGreeting(greeting){
    return function(name){
        return greeting + ", " + name;
    };
}
const sayHello = creatingGreeting("Hello");
const sayWelcome = creatingGreeting("Welcome");

console.log(sayHello("Idris"))
console.log(sayWelcome("Awet"));


// closures 
function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count
    };
}

const counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

const letNum =[ 1,2,3,4,5,6]

const letResult = letNum
        .filter(numbera => numbera % 2 === 0)
        .map(numbera => numbera * 10);
conssole.log(letResult)


// find()

const myStudent = [
    {name: "Ali", score:90},
    {name: "Ifade", score:30},
    {name: "Miracle", score:80},
    
];

const aStudent = myStudent.find(aStudent => aStudent.name === "Miracle");
console.log(aStudent);



const scores = [70,80,90,30]
const allPassed = scores.every(score => score>= 50);
console.log(allPassed)

// oopl


const person = {
    namw: "Awet",
    age: 20,

    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


// c;lass
class Stadent{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
     introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

} 

const student1 = new Stadent("Awet", 20);
const student2 = new Stadent("Idris", 22);
const student3 = new Stadent("Ali", 25);
const student4 = new Stadent("Ifade", 30);

student1.introduce();
student2.introduce();
student3.introduce();
student4.introduce();


// constructor
class FirstStudent{
    constructor(){
        console.log("A new student has been created!");
    }
}

const firstStudent1 = new FirstStudent(); // Output: A new student has been created!

// methods

// updating properties
// class FirstStudent{
//     constructor(name, score){
//         this.name = name;
//         this.score = score;
//     }
//     upadateScore(newScore){
//         this.score = newScore;
//     }
// }


// const firstStudent = new FirstStudent("Awet", 90);
// console.log(firstStudent.score); // Output: 90

// firstStudent.upadateScore(95);
// console.log(firstStudent.score); // Output: 95

// METHODS WITH CONDITION

class FirstStudent{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    getResult(){
        if(this.score >= 50){
            return "Pass";
        } else {
            return "Fail";
        }
    }
}


const firstStudent = new FirstStudent("Awet", 90);
console.log(firstStudent.getResult()); // Output: Pass


// poly class
class BankAccount {
    calculateFee(){
        return 100;
    }
}
class SavingsAccount extends BankAccount {
    calculateFee(){
        return 50;
    }   
}

const savings = new SavingsAccount();
const business = new BankAccount();
console.log(savings.calculateFee()); // Output: 50
console.log(business.calculateFee()); // Output: 100

// abstract class
class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    transferMoney(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Transferred ${amount} to another account.`);
        }else{
            console.log("Insufficient balance.");
        }
    }
}

// const account = new BankAccount("Awet", 1000);
account.transferMoney(500); // Output: Transferred 500 to another account.


// poly2
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log("Animal makes a sound.");
    }
}
class Dog extends Animal{
        makeSound(){
            console.log(this.name +"Dog barks.");
        }
}

class Cat extends Animal{
    makeSound(){
        console.log(this.name + "Cat meows.");
    }
}

class Bird extends Animal{
    makeSound(){
        console.log(this.name + "Bird chirps.");
    }
}

const dog = new Dog("Buddy");
console.log(dog.name)
dog.makeSound();
const cat = new Cat("Whiskers");
console.log(cat.name)
cat.makeSound();
const bird = new Bird("Tweety");
console.log(bird.name)
bird.makeSound();


// abstract class

class BankAccount {
    #checkBalance(){
        console.log("Checking balance...");
    }
    #processTransaction(){
        console.log("Processing transaction...");
    }
    widhraw(amount){
        this.#checkBalance();   
        this.#processTransaction();
        console.log(`Withdrawing ${amount} from the account.`);
    }
}

const account = new BankAccount();
// account.widhraw(500); // Output: Checking balance... Processing transaction... Withdrawing 500 from the account.
 account.#checkBalance(); // Output: Checking balance...
// account.#processTransaction(); // Output: Processing transaction...

alert("hello world")