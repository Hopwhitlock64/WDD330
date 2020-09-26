const flavors = ["Strawberry", "Blueberry", "Lemon", "Mint", "chocolate", "Vanilla"];
const countries  = ["England", "France", "United States of America", "Costa Rica", "Peru", "Italy", "Japan"];
const numbers = [1,2,3,4,5,6,7,10,11,12,23,76,123,785,1254];
const names = ["James", "sally", "Frank", "Jason", "Harry", "Samantha", "Kelly"];
const animals = ["Dog", "Cat", "Dolphin", "Fish", "Skunk", "Bear", "Deer"];

// for loop
for(let i = 0 ; i < numbers.length; i++){
    console.log(numbers[i]);
}
// rest operator
function rest(...flavors){
    return flavors;
}
// spread operator
function sum(x, y, z) {
    return x + y + z;
  }
  console.log(sum(...numbers));  