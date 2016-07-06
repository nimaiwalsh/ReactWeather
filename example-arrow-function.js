// var names = ["Nimai", "Lincoln", "Jake"];
//
// //Normal
// names.forEach (function(name) {
//   console.log('forEach', name);
// });
//
// //Arrow functional with multiple lines
// names.forEach(name  => {
//   console.log('arrowFunc', name);
//   console.log('line2')
// });
//
// //Arrow function using a single line statement
// names.forEach(name => console.log(name));
//
// //Arror funcion
// var returnMe = (name) => name + '!';
// console.log(returnMe('Nimai'));
//
// //Normal function
// function returnMe (name) {
//   name + '2';
// };
// console.log(returnMe('Jake'));

//===========Challenge=======

//Convert anonymous functions
function add (a,b) {
    return a +b;
}
console.log(add(8,9));

//To arrow function double line
var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(1,2));

//To arrow function single line
var addExpression = (a,b) => a + b;
console.log(addExpression(6,7));
