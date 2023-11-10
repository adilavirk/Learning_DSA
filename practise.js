let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  let element = arr[i];
  //   console.log(`the reverse array output is ${element}`);
}
// console.log(arr.length)
let findIndex = 4;

let printIndexValue = 4;
// console.log(arr[printIndexValue]);

//indexof

// console.log(arr.indexOf(5));

for (let i = 0; i < arr.length; i++) {
  if (i === printIndexValue) {
    // console.log(`your value is ${arr[i]}`);
  } else {
    // console.log(`try again`);
  }
}

// Insert an element in Array

let newElement = 10;
let positon = 2;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= positon) {
    arr[i + 1] = arr[i];
  }
  if (i === positon) {
    arr[i] = newElement;
  }
}
// arr.pop();
// arr.push(200);
// arr.shift();
// arr.unshift(3000);
// arr.splice(4, 0, 6000); //to insert newValue at any position in Array
// console.log(arr);

//delete element
for (let i = positon; i < arr.lengt; i++) {
  if (i === positon) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
}
// console.log(arr);

// search an element in array

let searchElement = 10;
let index = undefined;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchElement) {
    index = i;
    break;
  }
}
console.log(index);
