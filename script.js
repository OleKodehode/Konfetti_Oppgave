const confettiWrapper = document.querySelector(".confetti_wrapper");
const confetti_amount = 50;

function spawnConfetti() {
  for (let i = 0; i < confetti_amount; i++) {
    const confetti = document.createElement("article");
    confetti.classList.add("confetti_piece");
    confetti.style.left = `${Math.ceil(Math.random() * 100)}%`;
    confetti.style.setProperty("--fall_duration", `${Math.random() * 3 + 3}s`);
    confetti.style.setProperty("--confetti_color", getRandomColor());
    confettiWrapper.appendChild(confetti);
  }
  document.querySelector(".confetti_button").removeAttribute("onclick");
}

function getRandomColor() {
  const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
  return colors[Math.floor(Math.random() * colors.length)];
}
