let greeting;
//test default value for greeting
greeting = "Hello, User!"

let hourNow = document.getElementById("hourNow");
let user_name = document.getElementById("user_name")

let greeting_title = document.getElementById("greeting_title");
greeting_title.textContent = greeting;



// function welcomeMessage() {
//     //greeting + user_name
//     welcomeMessage = greeting + "," + user_name + "!";

//     if (hourNow > 18) {
//         greeting = `Good evening, ${user_name}!`
//     } else if (hourNow > 12) {
//         greeting = `Good afternoon, ${user_name}!`
//     } else if (hourNow > 0) {
//         greeting = `Good morning, ${user_name}!`
//     } else {
//         greeting = "Welcome!"
//     }

//     console.log(greeting);
// }

// welcomeMessage();