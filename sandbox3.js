// const ol =document.querySelector('.people');
// const people = ['mario', 'luigi', 'rgu', 'shan', 'chan-li'];
// let html = ``;
// people.forEach(function(person){
//     html +=`<li>${person}</li>`
// });
// console.log(html)
// ol.innerHTML= html;

// object
let user = {
    name : 'Awet',
    age : 30,
    email : 'awetworld.com',
    location : "berlin",
    blogs : ['this are things u do', 'ten most funny people']
};
console.log(user)
console.log(user.name)


console.log(user.age);
console.log(user['email']);
console.log(user.email);

user['name'] = 'dayo';
console.log(user['name']);


let total = 0;

function addToTotal(num) {
  total += num;
  return total;
}
console.log(addToTotal(7))
console.log(addToTotal(6))