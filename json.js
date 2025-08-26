// let jsonString = '{"name": "Bhavya", "age": 22}';
// let obj = JSON.parse(jsonString);

// console.log(obj.name);

let person = {
  name: "Bhavya",
  age: 22,
  isStudent: true,
  skills: ["JavaScript", "Python", "HTML"],
  address: {
    city: "Mumbai",
   
  }
};

console.log(person.name);         
console.log(person.age);
console.log(person.skills[1]);    
console.log(person.address.city);  
