// ----------------------------------------
// 🎯 Part 1: JavaScript Basics - Variables, Conditionals
// ----------------------------------------

let username = prompt("👋 Welcome to BlissBroom! What's your name?");
if (username) {
  console.log("Hello, " + username);
  document.getElementById("output").innerText = `Hello, ${username}! Let's clean up your code. 🧹`;
} else {
  document.getElementById("output").innerText = `Welcome, Guest! Let's get blissful with JavaScript. 😊`;
}

// ----------------------------------------
// ❤️ Part 2: Functions - Reusable Logic
// ----------------------------------------

// Function to calculate total cleaning time
function estimateCleaningTime(tasks, avgTimePerTask) {
  return tasks * avgTimePerTask;
}

// Example use
let estimatedTime = estimateCleaningTime(5, 12); // 5 tasks, 12 min each
console.log(`Estimated cleaning time: ${estimatedTime} minutes`);

// Function to greet user again on button click
function greetUser(name) {
  alert(`🌟 Hey ${name || 'Guest'}, welcome to BlissBroom!`);
}

document.getElementById("greetButton").addEventListener("click", function () {
  greetUser(username);
});

// ----------------------------------------
// 🔁 Part 3: Loops - For and While
// ----------------------------------------

// For loop: simulate task completion logs
for (let i = 1; i <= 3; i++) {
  console.log(`✅ Task ${i} completed!`);
}

// While loop: countdown to break
let minutesLeft = 3;
while (minutesLeft > 0) {
  console.log(`⏳ Break in ${minutesLeft} minutes...`);
  minutesLeft--;
}

// ----------------------------------------
// 🌐 Part 4: DOM Manipulation - Interactivity
// ----------------------------------------

// Toggle dark/light "Bliss Mode"
document.getElementById("toggleButton").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Add items dynamically to the task list
const itemList = document.getElementById("itemList");
let taskCount = 1;

document.getElementById("addItemButton").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = `🧹 Task ${taskCount++}`;
  itemList.appendChild(newItem);
});

// Change heading text after a delay
setTimeout(() => {
  document.querySelector("h1").innerText = "BlissBroom: Code Cleaned & Ready!";
}, 4000);
