const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
let yesSize = 1; // Initial scale of the "Yes" button
let noPos = 1;
const sweetMessages = [
  "Are you sure? 🥺",
  "Really sure? 💔",
  "Think again! 😢",
  "You're breaking my heart! 💔",
  "Please? 🥺",
  "Just say yes! 💖",
  "I'll keep asking! 😭",
  "You can't resist forever! 💘",
  "I'm not giving up! 💕",
  "YES is the only option! 💖"
];
let messageIndex = 0;

noButton.addEventListener('click', () => {
  if (messageIndex < sweetMessages.length) {
    response.textContent = sweetMessages[messageIndex];
    messageIndex++;
  } else {
    response.textContent = "You have to say YES! 💖";
  }

  // Increase the size of the "Yes" button
  yesSize += 0.5;
  yesButton.style.transform = `scale(${yesSize})`;
  yesButton.style.marginRight = `${yesSize * 10}px`; // Push the "No" button to the side

  // Increase the size of the "Yes" button
  noPos += 0.7;
  noButton.style.position = `translateX(${noPos}px)`;
  noButton.style.marginLeft = `${noPos * 10}px`; // Push the "No" button to the side

  // If the "Yes" button covers the screen, disable the "No" button
  if (yesSize >= 10) {
    noButton.disabled = true;
    response.textContent = "You have no choice but to say YES! 💖";
  }
});

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You've made me the happiest person ever! 💖";
  yesButton.style.transform = "scale(1)"; // Reset button size
  yesButton.style.marginRight = "0"; // Reset margin
  yesButton.textContent = "I Knew You'd Say Yes! 💘";
  noButton.style.display = "none"; // Hide the "No" button

  // Add a romantic appreciation message
  const appreciationMessage = document.createElement('p');
  appreciationMessage.textContent = "Thank you for being the most amazing person in my life. I love you to the moon and back! 💕";
  appreciationMessage.style.fontSize = "1.5rem";
  appreciationMessage.style.color = "#e91e63";
  appreciationMessage.style.marginTop = "20px";
  document.querySelector('.container').appendChild(appreciationMessage);
});