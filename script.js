// Function for displaying variables example
function displayMessage() {
  let message = "Hello, welcome to learning JavaScript!";
  const greeting = "Welcome!";
  var info = "JavaScript makes websites interactive and dynamic.";

  console.log(message);
  console.log(greeting);
  console.log(info);

  // Output the message to the page as well
  alert(message + "\n" + greeting + "\n" + info);
}

// Function for greeting user
function greetUser(name) {
  console.log("Hello, " + name + "!");
  alert("Hello, " + name + "!");
}
