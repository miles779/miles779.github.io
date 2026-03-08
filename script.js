let count = 0;

document.getElementById("click-btn").addEventListener("click", () => {
  count++;
  document.getElementById("counter-text").textContent =
    `You've clicked ${count} times`;
});
