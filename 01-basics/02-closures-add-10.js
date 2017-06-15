// on this exersice we need to create a Closure that when you initialized is loaded with a value pass as parameter
// then each time that is call with a parameter, will add the call value + the value pass when initialized
// Note: it will not save the value fro las time it was call.


// the solution the teacher give:
//
// function adder(baseNumber){
//   return function(numberToAdd){
//     return baseNumber + numberToAdd;
//   }
// }

console.log("Playing with Closures:")
console.log("");

function createAdder(num){
  var total = 0;

  return function (segu){
    // console.log("segu: ", segu);
    if(segu === undefined){segu = 0;}
    total = num;
    total += segu;
    return total;
  }

}

var addTen = createAdder(10);
console.log(addTen());
console.log(addTen(4));
console.log(addTen(2));
console.log("");



// this is the output:
//
// Playing with Closures:
//
// segu:  undefined
// 10
// segu:  4
// 14
// segu:  2
// 12
