function person(name, callback) {
    console.log("Person:", name);   
    callback();                     
}

function studying() {
    console.log("The person is studying.");
}

person("Bhavya", studying);