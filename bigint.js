// big int
const a = 9007199254740991n; 
const b = 1n;

console.log(a + b);  
console.log(a * b);  
console.log(a - b);  
console.log(a / 2n);


// math squr

Math.sqrt(16n);

const result = Math.sqrt(Number(16n));
console.log(result);

// comparison
let p = 5;
let q = "5";

console.log(p == q);  
console.log(p === q); 
console.log(p != q);  
console.log(p !== q); 
console.log(p > 3);   
console.log(p < 3);   
console.log(p >= 5); 
console.log(p <= 4); 

// logical
let m = true;
let n = false;

console.log(m && n); 
console.log(m || n); 
console.log(!m);  

// increment and decrement

let num = 5;

console.log(++num); // 6 (Pre-increment)
console.log(num++); // 6 (Post-increment → now 7)
console.log(--num); // 6 (Pre-decrement)
console.log(num--);



// string op
let firstName = "Hello";
let lastName = "World";

console.log(firstName + " " + lastName);


// ternary
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); 

// break

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Stop loop when i is 5
    }
    console.log(i);
}
