/* ===========================
   ELEMENT SELECTION
=========================== */

// Cookie elements
const cookieWhole = document.getElementById("cookie-whole");
const cookieLeft = document.getElementById("cookie-left");
const cookieRight = document.getElementById("cookie-right");

// Fortune strip
const fortuneStrip = document.getElementById("fortune-strip");
const fortuneText = document.getElementById("fortune-strip-text");
const ratingButtons = document.getElementById("rating-buttons");

// Rating buttons
const loveBtn = document.getElementById("love-button");
const mehBtn = document.getElementById("meh-button");
const hateBtn = document.getElementById("hate-button");

// Footer buttons
const statsBtn = document.getElementById("stats-btn");
const customBtn = document.getElementById("custom-snacks-btn");
const resetBtn = document.getElementById("reset-btn");

// Modals
const statsModal = document.getElementById("stats-modal");
const customModal = document.getElementById("custom-snack-modal");


/* ===========================
   SNACK DATA
=========================== */

let snacks = JSON.parse(localStorage.getItem("snackList")) || [
  "Chocolate Bar",
  "Crisps",
  "Gummy Bears",
  "Popcorn",
  "Cookies",
  "Pretzels",
  "Fruit Snacks"
];

let ratings = JSON.parse(localStorage.getItem("snackRatings")) || {};

function saveRatings() {
  localStorage.setItem("snackRatings", JSON.stringify(ratings));
}

function saveSnacks() {
  localStorage.setItem("snackList", JSON.stringify(snacks));
}


/* ===========================
   COOKIE BREAK SEQUENCE
=========================== */

cookieWhole.addEventListener("click", () => {

  cookieWhole.classList.add("shake");
  cookieWhole.classList.add("grow");

  setTimeout(() => {
    cookieWhole.style.display = "none";

    cookieLeft.style.display = "block";
    cookieRight.style.display = "block";

    cookieLeft.classList.add("fall-left");
    cookieRight.classList.add("fall-right");

    setTimeout(() => {
      showPrediction();
    }, 600);

  }, 400);
});


/* ===========================
   PREDICTION SYSTEM
=========================== */

function showPrediction() {
  const randomSnack = snacks[Math.floor(Math.random() * snacks.length)];
  fortuneText.textContent = randomSnack;

  fortuneStrip.style.opacity = "1";
  fortuneStrip.style.transform = "scale(1)";

  ratingButtons.style.opacity = "1";
}


/* ===========================
   RATING SYSTEM
=========================== */

function rateSnack(type) {
  const snack = fortuneText.textContent;

  if (!ratings[snack]) {
    ratings[snack] = { love: 0, meh: 0, hate: 0 };
  }

  ratings[snack][type]++;
  saveRatings();
}

loveBtn.addEventListener("click", () => rateSnack("love"));
mehBtn.addEventListener("click", () => rateSnack("meh"));
hateBtn.addEventListener("click", () => rateSnack("hate"));


/* ===========================
   MODALS
=========================== */

statsBtn.addEventListener("click", () => {
  statsModal.style.display = "block";
  statsModal.innerHTML = "<h2>Your Stats</h2>";

  for (let snack in ratings) {
    statsModal.innerHTML += `
      <p><strong>${snack}</strong> — ❤️ ${ratings[snack].love}, 😐 ${ratings[snack].meh}, 💀 ${ratings[snack].hate}</p>
    `;
  }

  statsModal.innerHTML += `<button onclick="statsModal.style.display='none'">Close</button>`;
});

customBtn.addEventListener("click", () => {
  customModal.style.display = "block";
  customModal.innerHTML = `
    <h2>Add a Custom Snack</h2>
    <input id="newSnackInput" placeholder="Snack name">
    <button id="addSnackBtn">Add</button>
    <button onclick="customModal.style.display='none'">Close</button>
  `;

  document.getElementById("addSnackBtn").onclick = () => {
    const newSnack = document.getElementById("newSnackInput").value.trim();
    if (newSnack) {
      snacks.push(newSnack);
      saveSnacks();
    }
  };
});


/* ===========================
   RESET SYSTEM
=========================== */

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  ratings = {};
  snacks = [];
  alert("All data reset!");
});
