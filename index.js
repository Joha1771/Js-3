// For1
let k = 28;
let n = 6;
for (let i = 1; i <= n; i++) {
  console.log(k);
}

// For2
let a2 = 41,
  b2 = 69;
for (let i = a2; i <= b2; i++) {
  console.log(i);
}
console.log("Count =", b2 - a2 + 1);

// For3
let a3 = 14,
  b3 = 20;
for (let i = b3; i >= a3; i--) {
  console.log(i);
}
console.log("Count =", b3 - a3 + 1);

// For4
let price4 = 48000;
for (let i = 1; i <= 10; i++) {
  console.log(i + " kg narxi = " + price4 * i);
}

// For5
let price5 = 15000;
for (let i = 0.1; i <= 1; i += 0.1) {
  console.log(i.toFixed(1) + " kg narxi = " + (price5 * i).toFixed(2));
}

// For6
let price6 = 45000;
for (let x = 1.0; x <= 2.0; x += 0.2) {
  console.log(x.toFixed(1) + " kg narxi = " + price6 * x);
}

// For7
let A7 = 15,
  B7 = 28,
  sum7 = 0;
for (let i = A7; i <= B7; i++) sum7 += i;
console.log("Sum =", sum7);

// For8
let A8 = 15,
  B8 = 28,
  mul8 = 1;
for (let i = A8; i <= B8; i++) mul8 *= i;
console.log("Multiplication =", mul8);

// For9
let A9 = 18,
  B9 = 45,
  sum9 = 0;
for (let i = A9; i <= B9; i++) sum9 += i ** 2;
console.log("Squares Sum =", sum9);

// For10
let n10 = 5,
  S10 = 0;
for (let i = 1; i <= n10; i++) S10 += 1 / i;
console.log("S =", S10);

// For11
let n11 = 29,
  S11 = 0;
for (let i = n11; i <= 2 * n11; i++) S11 += i ** 2;
console.log("S =", S11);

// For12
let n12 = 5,
  P12 = 1;
for (let i = 1; i <= n12; i++) P12 *= i;
console.log("P =", P12);

// For13
let n13 = 10,
  S13 = 0;
for (let i = 1; i <= n13; i++) {
  if (i % 2 === 0) S13 -= 1 / i;
  else S13 += 1 / i;
}
console.log("Alternating S =", S13);

// For14
let n14 = 10;
let S14 = 0;
for (let i = 1; i <= 2 * n14 - 1; i += 2) {
  S14 += i ** 3;
}
console.log("Formula =", S14);

// For15
let a15 = 3,
  n15 = 5,
  P15 = 1;
for (let i = 1; i <= n15; i++) P15 *= a15;
console.log("a^n =", P15);
