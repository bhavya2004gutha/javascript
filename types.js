destructing
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first);  
console.log(second); 
console.log(third);




constucting
const person = {
  name: "bhavya",
  age: 21
};

console.log(person.name);
console.log(person.age);




try {
  console.log('Trying something...');
} catch (error) {
  console.log('Caught an error:', error.message);
} finally {
  console.log('This always runs.');
}

try{ 
    let x = y + 1;
} catch (error) {
    console.log('Caught an error:',error.message);
} finally {
    console.log('This is always runs.');
}

try {
    let age = -1;
    if ( age < 0) {
       throw new Error("Age cannot be negative!");

    }
    console.log("Valid age:",age);

} catch (error) {
    console .log('Caught an error',error.message);

}finally {
    console.log ('This is always run.');
}


setTimeout(myFunction,5000);
function myFunction(){
    console.log('apple is red');
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x === 1) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {
        console.log("Success:", value);
    },
    function(error) {
        console.log("Failed:", error);
    }
);

async function myFunction(){
    return "HELLO";
};
   myFunction().then(
    function(value){
        console.log("success:",value);
    }
   );

function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds");
    }, 2000);
  });
}

async function showMessage() {
  console.log("1. Waiting for message...");

  const message = await delayMessage();  

  console.log("2. Message:", message);
}

const os = require('os');
console.log(os.platform());
console.log(os.version());



 const path = require('path');

console.log(__dirname); 
console.log(__filename); 

console.log(path.dirname(__filename)); 




  
