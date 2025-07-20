const confettiWrapper = document.querySelector(".confetti_wrapper");
const confetti_amount = 50;
const button = document.querySelector(".confetti_button");
const buttonRect = button.getBoundingClientRect();

function spawnConfetti() {
  const spawnFromButton = Math.random() > 0.5;
  const upwardsBoost = spawnFromButton
    ? innerHeight * 0.4 + Math.random() * innerHeight * 0.05 // 90% of the window height +/- 5% - Button is in the middle of the screen
    : innerHeight * 0.7 + Math.random() * innerHeight * 0.05; // 70% of the window height +/- 5%

  for (let i = 0; i < confetti_amount; i++) {
    const confetti = document.createElement("article");
    confetti.classList.add("confetti_piece");
    confetti.style.setProperty("--fall_duration", `${Math.random() * 3 + 3}s`);
    confetti.style.setProperty("--confetti_color", getRandomColor());
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });

    if (spawnFromButton) {
      // Spawn confetti from the button
      const xOffset = (Math.random() - 0.5) * innerWidth;

      confetti.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
      confetti.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

      confetti.style.setProperty("--x_movement", `${xOffset}px`);
      confetti.style.setProperty("--y_movement", `-${upwardsBoost}px`);
    } else {
      // Spawn confetti from the corners
      const fromLeft = Math.random() > 0.5;
      confetti.style.left = fromLeft ? "0px" : `${innerWidth}px`;
      confetti.style.top = `${innerHeight}px`;

      const xOffset = fromLeft
        ? Math.random() * (innerWidth / 2)
        : -Math.random() * (innerWidth / 2);
      confetti.style.setProperty("--x_movement", `${xOffset}px`);
      confetti.style.setProperty("--y_movement", `-${upwardsBoost}px`);
    }

    confetti.style.animation = "confetti_burst var(--fall_duration) linear";
    confetti.style.transformOrigin = `${Math.random() * 100}% ${
      Math.random() * 100
    }%`;
    confettiWrapper.appendChild(confetti);
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
