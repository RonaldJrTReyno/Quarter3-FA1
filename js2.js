var fn = prompt("Enter first name: ", "");
var ln = prompt("Enter last name: ", "");
var by = parseInt(prompt("Enter birth year: ", ""));

var age = (2025 - by);

document.getElementById("message").innerHTML = 
    "Hello " + fn + " " + ln + 
    "! How does it feel to be " + 
    age + " years old?";