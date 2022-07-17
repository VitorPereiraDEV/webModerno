let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

console.log("ou");

[a, b] = [b, a]

console.log(a);
console.log(b);
