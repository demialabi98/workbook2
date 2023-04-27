"use strict";

showGreeting();

function showGreeting(line) {
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.innerHTML = "Yeah because you were wrong" + " " + line;
  console.log(messageDiv);
}

showGreeting("Arthur");
