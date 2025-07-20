const confettiWrapper = document.querySelector(".confetti_wrapper");
const confetti_amount = 50;

function spawnConfetti() {
  for (let i = 0; i < confetti_amount; i++) {
    const confetti = document.createElement("article");
    confetti.classList.add("confetti_piece");
    confetti.style.left = `${Math.ceil(Math.random() * 100)}%`;
    confetti.style.setProperty(
      "--fall_duration",
      `${Math.random() * 3 + 1.5}s`
    );
    confetti.style.setProperty("--confetti_color", getRandomColor());
    confettiWrapper.appendChild(confetti);
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

function getRandomColor() {
  const colors = [
    "#e71818ff",
    "#ffa500",
    "#32cd32",
    "#177ee4ff",
    "#df3e8eff",
    "#10e3ffff",
    "#590ed1ff",
    "#ffffff",
    "#fffb01ff",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
