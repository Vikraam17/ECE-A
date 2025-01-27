function sum(a = 40, b = 20) {
  var sum = a + b;
  console.log(sum);
}
sum(10, 30);
sum();

var sum = () => {
  console.log("Hello World");
};
sum();

var sum = (a, b) => {
  console.log(a + b);
};

sum(10, 20);
