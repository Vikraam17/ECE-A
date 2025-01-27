//Spread Operator
var arr1 = [10, 20, 30];
var arr2 = [...arr1, 40, 50, 60];
console.log(arr1);
console.log(arr2);

//Destructuring Operator
var marks = [80, 90, 60];
var [m1, m2, m3] = marks;
console.log(m1);
console.log(m2);
console.log(m3);

//For - in
for (let index in arr2) {
  console.log(index);
}
//for - of
for (let value of arr2) {
  console.log(value);
}

var obj = {
  fname: "raja",
  lname: "m",
  "phn num": "9876543210",
};

for (let key in obj) {
  console.log(key + " : " + obj[key]);
}
