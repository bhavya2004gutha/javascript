


// 1. Object Example
let person = {
  name: "Bhavya",
  age: 25
};
console.log(person);

// 2. String Length
let text = "bhavya";
let length = text.length;
console.log(length);

// 3. charAt()
text = "tekreant";
let char = text.charAt(0);
console.log(char);

// 4. charCodeAt()
text = "Hello World";
char = text.charCodeAt(0);
console.log(char);

// 5. codePointAt()
text = "bhargavi";
let codePoint = text.codePointAt(1);
console.log(codePoint);

// 6. String Concatenation
let text1 = "office";
let text2 = "at2pm";
let concat = text1 + text2;
console.log(concat);

// 7. at()
text = "bhavya";
char = text.at(2);
console.log(char);

// 8. Indexing with []
text = "script";
char = text[3];
console.log(char);

// 9. slice()
text = "apple, kiwk";
let sliced = text.slice(0, 5);
console.log(sliced);

// 10. substring()
text = "apple, dragon,lemon";
let sub = text.substring(0, 7);
console.log(sub);

// 11. substr() (deprecated but used here)
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);

// 12. toUpperCase()
let name = "bhavya";
let upperName = name.toUpperCase();
console.log(upperName);

// 13. toLowerCase() 
name = "DELHI";
let lowerName = name.toLowerCase(); 
console.log(lowerName);

// 14. isWellFormed()
text = "Hello world!";
let result = text.isWellFormed();
console.log(result);

// 15. toWellFormed()
text = "Hello World \uD800";
result = text.toWellFormed();
console.log(result);

// 16. trim()
text1 = "      Hello World!      ";
text2 = text1.trim();
console.log(text2);

// 17. trimStart()
text1 = "           cat looking     ";
text2 = text1.trimStart();
console.log(text2);

// 18. trimEnd()
text1 = "           cat looking     ";
text2 = text1.trimEnd();
console.log(text2);

// 19. padStart()
text = "5";
let padded = text.padStart(4, "0");
console.log(padded);

// 20. padEnd()
text = "5";
padded = text.padEnd(4, "0");
console.log(padded);

// 21. repeat()
text = "Hello world!";
result = text.repeat(2);
console.log(result);

// 22. replace()
text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");
console.log(newText);

// 23. replaceAll()
let message = "haa haa haa haa";
result = message.replaceAll("haa", "lol");
console.log(result);

// 24. split()
message = "i love india";
result = message.split("");
console.log(result);