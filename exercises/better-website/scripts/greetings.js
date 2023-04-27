"use strict";

function showGreeting() {
  const messageDiv = document.getElementById('messageDiv');
  messageDiv.innerHTML = "now you know why it failed";
  console.log(messageDiv);
}

showGreeting()