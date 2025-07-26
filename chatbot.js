// ✅ chatbot.js
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotContainer = document.getElementById("chatbotContainer");
const chatbotMessages = document.getElementById("chatbotMessages");
const userInput = document.getElementById("userInput");
const darkModeToggle = document.getElementById("darkModeToggle");

// Show/hide chatbot
chatbotToggle.addEventListener("click", () => {
  chatbotContainer.classList.toggle("open");
});

// Dark mode toggle
let darkMode = false;
darkModeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
  chatbotContainer.classList.toggle("dark", darkMode);
});

// Handle user input
function sendMessage(e) {
  e.preventDefault();
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage("You", msg, "user");
  userInput.value = "";
  generateBotResponse(msg);
}

// Append message
function appendMessage(sender, text, type = "bot") {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbotMessages.appendChild(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Basic AI-like response logic
function generateBotResponse(input) {
  const msg = input.toLowerCase();
  let response = "I'm not sure I understand. Could you rephrase?";

  if (msg.includes("order")) response = "You can check your order status in your account or contact us with your order number.";
  else if (msg.includes("return")) response = "We offer hassle-free 30-day returns. You can start a return through your order history.";
  else if (msg.includes("how") && msg.includes("use")) response = "Attach the core to the base shoe and click it into place. Check our Features page for a full guide!";
  else if (msg.includes("contact")) response = "You can use the form above or email us directly at support@flexcore.com.";

  setTimeout(() => appendMessage("FlexBot", response), 600);
}

// FAQ quick replies
function handleFAQ(text) {
  userInput.value = text;
  sendMessage(new Event("submit"));
}
