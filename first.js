// function declaration
function greet(name) {
    console.log('how are you' + name );
}

greet("Alice"); // Output: He

// function expression
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};

console.log(greetExpression("Bob")); // Output: Hi, Bob!    

// const Speak = function (names, time){
//     console.log(`good${time}${names}`);
// };

// Speak('femi','morning')
// Speak('Dayo','Afternoon')

const Speak = function (names = 'Femi', time='morning'){
    console.log(`good${time}${names}`);
};

Speak()


// const calAreal = function(radius){
//     let area = 3.14*radius**2
//     console.log(area);
// };
// calAreal(6);

// const calAreal = function(radius){
//     return 3.14*radius**2
    
// };
// const area = calAreal(6)
// console.log(area);


// arrow functions
const calAreal = (radius) => 3.14*radius**2


const area = calAreal(6)
console.log(area);