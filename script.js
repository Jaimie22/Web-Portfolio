let clicks = 0;

const button = document.getElementById("clickButton");
const countText = document.getElementById("clickCount");

button.addEventListener("click", () => {
  clicks++;
  countText.textContent = "Clicks: " + clicks;
});