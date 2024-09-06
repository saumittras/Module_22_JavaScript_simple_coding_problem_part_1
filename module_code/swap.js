let a = 5;
let b = 7;
let tem = 0;

console.log(a, b);

tem = a;
a = b;
b = tem;
console.log(a, b);

// new methode

let x = 5,
  y = 7;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
