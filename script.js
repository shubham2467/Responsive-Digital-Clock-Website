let use24Hour = false;
let isLightMode = false;

function updateClock() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];

  const date = now.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let time;
  if (use24Hour) {
    time = now.toLocaleTimeString(undefined, {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  } else {
    time = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  document.getElementById("day").textContent = day;
  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}

function toggleFormat() {
  use24Hour = !use24Hour;
  updateClock();
}

function toggleTheme() {
  isLightMode = !isLightMode;
  document.body.classList.toggle('light-mode', isLightMode);
}

updateClock();
setInterval(updateClock, 1000);
