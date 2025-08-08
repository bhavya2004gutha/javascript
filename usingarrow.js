
// Arrow function with one parameter 
const square = x => x * x;
console.log(square(5)); 

// Arrow function with multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(4, 3));  

// Arrow function with multiline body
const divide = (a, b) => {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 2));  
console.log(divide(10, 0));  

// No parameter
const sayHello = () => console.log("Hello!");
sayHello();  // Hello!

// Using arrow functions with array methods

// map: doubling numbers
const numbers1 = [1, 2, 3];
const doubled = numbers1.map(num => num * 2);
console.log(doubled); 

// filter: filtering adults (18+)
const ages = [12, 18, 21, 16];
const adults = ages.filter(age => age >= 18);
console.log(adults);  

// reduce: summing an array
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum);  

// flatMap: flattening mapped arrays
const words = ["hello", "world"];
const chars = words.flatMap(word => word.split(""));
console.log(chars);  
// filter: even numbers
const numbers2 = [1, 2, 3, 4];
const even = numbers2.filter(n => n % 2 === 0);
console.log(even);  

// sort: alphabetical
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);  

// sort: descending and ascending numeric sort
const nums1 = [1, 2, 3, 4];
nums1.sort((a, b) => b - a);
console.log(nums1);  

nums1.sort((a, b) => a - b);
console.log(nums1);  

// reverse
const letters = ['a', 'b', 'c'];
letters.reverse();
console.log(letters);  

// String to Number
console.log(Number("42"));        
console.log(parseInt("42px"));    
console.log(parseFloat("3.14abc"));

// Number to String
console.log(String(123));          
console.log((456).toString());    
console.log(`${789}`);            

// Boolean to Number
console.log(Number(true));         
console.log(Number(false));       

// Number to Boolean
console.log(Boolean(0));         
console.log(Boolean(100));         

// String to Boolean
console.log(Boolean(""));          
console.log(Boolean("0"));         

// null and undefined
console.log(Number(null));         
console.log(Number(undefined));    
console.log(String(null));       
console.log(String(undefined)); 


