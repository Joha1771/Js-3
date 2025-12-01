
// 1

let k = 28;
let n = 6;

for(let i = 1; i <= n; i++){
    console.log(k)
}

// 2 

let a = 41;
let b = 69;

let c = b - a;

for(let i = 1; i <= c; i++){
    console.log(c)
}
for(let i = 1; i <= a; i++){
    console.log(b)
}
 
for(let i = 1; i <= b; i++){
    console.log(a)
}

// 3


let w = 14;
let r = 20;

let t = r - w;
let y = w + r;

for(let i = 1; i <= t; i++){
    console.log(t)
}
for(let i=1; i <= t; i++){
    console.log(-i - (-y))
}
for(let i=1; i <= a; i++){
    console.log(a)
}
for(let i=1; i <= a; i++){
    console.log(b)
}

// 4

let u = 48000;

for(let i = 1; i <= 10; i = i + 1){
    console.log(i +  " kg konfetti narxi = " + (u * i).toFixed(2))
}


 console.log("")


// 5

let o = 15000;

for(let i = 0.1; i <= 1; i = i + 0.1){
    console.log(i.toFixed(1) + " kg konfet narxi = " + (o * i).toFixed(2))
}

console.log("")

// 6

let p = 45000;

for(let i = 1; i <= 2; i = i * 1.1){
    console.log(i.toFixed(1) + " kg konfet narxi = " + (p * i).toFixed(2))
}


console.log("")

// 7 

let m = 15;
let nn = 28;

let z = (nn - m)
let v = (nn - m) / 10
let x = (nn - m) % 10

for(let i = 1; i <= z; i++){
    console.log(parseInt(v) + x);
}



// 8

let h = 67;
let j = 72;

let g = (j - h) * 2

for(let i=1; i <= g; i++ ){
    console.log(i+g)
}

// 9

let B = 18;
let C = 45;

let G = C - B

for(let i = 1; i <= G; i++){
    console.log(G**2)
}

// 10

let F = 5;
let K = 0;

for(i = 1; i <= F; i++){
console.log(1 + "/" + i);

}

// 11

let FF = 29;

for(let i = 0; i <= FF; i++){
    console.log(i+(FF**2))
}


// 12

let FFF = 5;

for(let i = 0; i <= FFF; i++){
    let value = 1.0 + i * 0.1
    console.log(value.toFixed(1))
}


console.log("")

// 13

let Q = 7;



for(let i=0; i <= Q; i++){
    let value = 1.0 + i * 0.1 
    console.log(value.toFixed(1))
}

// 14

let H = 10;


for(let i = 1; i <= H; i++){
    console.log(i + 2 * (H**2 - 1))
}
