

// 1. forEach loop with array of numbers
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log("Number:", num);
});

// 2. for...of loop with colors
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color);
}




// 5. while loop
let i = 1;
while (i <= 5) {
    console.log("While Count:", i);
    i++;
}

// 6. do...while loop
i = 1;
do {
    console.log("Do-While Count:", i);
    i++;
} while (i <= 5);

let student = {
  name: "Bhavya",
  age: 21,
  course: "ECE"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
