// For1

let k = 13;
let n = 3;

for(let i = 1; i <= n; i++){
    console.log(k);
}

// For2

let a2 = 18;
b2 = 36;

for(let i = a2; i <= b2; i++){
    console.log(i)
}
console.log("Count =", b2 - a2 + 1);

// For3

let a3 = 26;
b3 = 68;

for(let i = b3-1; i >= a3+1; i--){
    console.log(i)
}
console.log("Count = ", b3 - a3 - 1)


// For4
let price4 = 48000;
for (let i = 1; i <= 10; i++) {
  console.log(i + " kg narxi = " + price4 * i);
}


// oralarida joy qoldirish uchun chunki google da chlkashib ketyapman will not use it in real projects:
console.log("")

// For5
let price5 = 15000;
for (let i = 0.1; i <= 1; i += 0.1) {
  console.log(i.toFixed(1) + " kg narxi = " + (price5 * i).toFixed(2));
}


// oralarida joy qoldirish uchun chunki google da chlkashib ketyapman will not use it in real projects:
console.log("")


// For6 

let price6 = 35000;

for(let i = 1.2; i <= 2.0; i = i + 0.2){
    console.log(i.toFixed(1) + " kg narxi = " + (i * price6).toFixed(2))
}

// For7

let a7 = 58;
b7 = 82;
sum7 = 0;

for(let i = a7; i <= b7; i++){
    sum7 += i  

    // += буни энди органдим чаптарафдаги static га value кошиларкан  

}
console.log("Sum =", sum7);

// For8

let a8 = 27;
b8 = 79;
sum8 = 1;

for(let i = a8; i <= b8; i++){
    sum8 *= i
    // Agar += oxshab chapga ong ni koshish mas kopaytirish uchun 
    // let da tepada sum8 ga 0 qoysez ishlamas ekan chunki 0 kopaytirivorarkan 
    // shuning uchun 1 qoyish kerak ekan
}
console.log("Sum = ", sum8)

//  For9

let a9 = 15;
b9 = 29;
sum9 = 0;

for(let i = a9; i <= b9; i++){
    sum9 += i**2;
}
console.log("Sum = ", sum9 )

// For10

let n10 = 7;
s10 = 0;

for(let i = 1; i <= n10; i++){
    s10 += 1 / i
}
console.log("Sum = " ,s10)

// For11

let n11 = 13;
 s11 = 0;


 for(let i = n11; i <= 2 * n11; i++){
    s11 += i**2
 }
console.log(s11)


// 12

let a12 = 8;
let s12 = 1;

for(let i = 1; i <= a12; i++) {
    let term = 1 + i / 10;
    s12 *= i;
}

console.log(s12);


// 13
let a13 = 4;
s13 = 0;

for (let i = 1; i <= a13; i++) {
    let term = 1 + i / 10;      
    let sign = (-1) ** (i - 1); 
    s13 += sign * term;
    
}

console.log(s13);

// 14 

let a14 = 10;
let s14 = 0;
for (let i = 1; i <= 2 * a14 - 1; i = i + 2) {
  s14 += i ** 3;
}
console.log("Formula =", s14);



// For15
let a15 = 3,
  n15 = 5,
  p15 = 1;
for (let i = 1; i <= n15; i++) 
    p15 *= a15;
console.log (p15);