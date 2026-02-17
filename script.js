// script.js – snack sense v2 logic
// trying to keep this readable + "me-ish" in comments

/* ===========================
   ELEMENT GRABS
=========================== */

// cookie bits
const cookieWhole = document.getElementById("cookie-whole");
const cookieLeft = document.getElementById("cookie-left");
const cookieRight = document.getElementById("cookie-right");

// fortune strip + text
const fortuneStrip = document.getElementById("fortune-strip");
const fortuneText = document.getElementById("fortune-strip-text");

// rating buttons + container
const ratingButtons = document.getElementById("rating-buttons");
const loveBtn = document.getElementById("love-button");
const mehBtn = document.getElementById("meh-button");
const hateBtn = document.getElementById("hate-button");

// footer buttons
const statsBtn = document.getElementById("stats-btn");
const customBtn = document.getElementById("custom-snacks-btn");
const resetBtn = document.getElementById("reset-btn");

// modals
const statsModal = document.getElementById("stats-modal");
const customModal = document.getElementById("custom-snack-modal");

/* ===========================
   DATA + STORAGE SETUP
=========================== */

// categories i'm using
const CATEGORIES = [
  "Sweet",
  "Sour",
  "Salty",
  "Fruity",
  "Spicy",
  "Chocolatey",
  "Crispy",
  "Savory",
  "Misc"
];

// default snacks with categories (a decent mix)
const defaultSnacks = [
  { name: "Chocolate Bar", category: "Chocolatey" },
  { name: "Crisps", category: "Savory" },
  { name: "Gummy Bears", category: "Sweet" },
  { name: "Popcorn", category: "Salty" },
  { name: "Cookies", category: "Sweet" },
  { name: "Pretzels", category: "Salty" },
  { name: "Fruit Snacks", category: "Fruity" },
  { name: "Sour Worms", category: "Sour" },
  { name: "Sour Patch Kids", category: "Sour" },
  { name: "Salted Peanuts", category: "Salty" },
  { name: "BBQ Crisps", category: "Savory" },
  { name: "Cheese Puffs", category: "Savory" },
  { name: "Dark Chocolate Squares", category: "Chocolatey" },
  { name: "Milk Chocolate Buttons", category: "Chocolatey" },
  { name: "Caramel Popcorn", category: "Sweet" },
  { name: "Toffee Pieces", category: "Sweet" },
  { name: "Spicy Nacho Chips", category: "Spicy" },
  { name: "Chili Crisps", category: "Spicy" },
  { name: "Salt & Vinegar Crisps", category: "Sour" },
  { name: "Apple Slices", category: "Fruity" },
  { name: "Grapes", category: "Fruity" },
  { name: "Strawberry Laces", category: "Fruity" },
  { name: "Chocolate Chip Cookie", category: "Chocolatey" },
  { name: "Brownie Bite", category: "Chocolatey" },
  { name: "Rice Crispy Treat", category: "Crispy" },
  { name: "Granola Bar", category: "Crispy" },
  { name: "Trail Mix", category: "Savory" },
  { name: "Salted Crackers", category: "Crispy" },
  { name: "Cheddar Crackers", category: "Savory" },
  { name: "Spicy Peanuts", category: "Spicy" },
  { name: "Hot Wings Flavour Crisps", category: "Spicy" },
  { name: "Lemon Sherbet", category: "Sour" },
  { name: "Cola Bottles", category: "Sweet" },
  { name: "Jelly Beans", category: "Sweet" },
  { name: "Fruit Pastilles", category: "Fruity" },
  { name: "Chocolate Wafer Bar", category: "Chocolatey" },
  { name: "Peanut Butter Cups", category: "Chocolatey" },
  { name: "Salted Caramel Bites", category: "Sweet" },
  { name: "Honey Roasted Nuts", category: "Savory" },
  { name: "Chili Popcorn", category: "Spicy" },
  { name: "Sweet & Salty Popcorn", category: "Sweet" },
  { name: "Prawn Cocktail Crisps", category: "Savory" },
  { name: "Onion Rings", category: "Savory" },
  { name: "Nacho Chips", category: "Savory" },
  { name: "Tortilla Chips", category: "Savory" },
  { name: "Spicy Tortilla Chips", category: "Spicy" },
  { name: "Fruit Leather", category: "Fruity" },
  { name: "Dried Mango", category: "Fruity" },
  { name: "Dried Pineapple", category: "Fruity" },
  { name: "Chocolate Covered Raisins", category: "Chocolatey" },
  { name: "Chocolate Covered Peanuts", category: "Chocolatey" },
  { name: "Marshmallows", category: "Sweet" },
  { name: "Mini Donuts", category: "Sweet" },
  { name: "Shortbread", category: "Sweet" },
  { name: "Salted Sticks", category: "Crispy" },
  { name: "Popcorn Chicken Bites (snack pot)", category: "Savory" },
  { name: "Spicy Noodle Snack", category: "Spicy" },
  { name: "Cheese String", category: "Savory" },
  { name: "Yogurt Coated Raisins", category: "Sweet" },
  { name: "Chocolate Muffin Bite", category: "Chocolatey" },
  { name: "Banana Chips", category: "Fruity" },
  { name: "Cinnamon Crisps", category: "Sweet" },
  { name: "Churro Bites", category: "Sweet" },
  { name: "Salted Popcorn", category: "Salty" },
  { name: "Sea Salt Crisps", category: "Salty" },
  { name: "Kettle Chips", category: "Savory" },
  { name: "Spicy Lentil Crisps", category: "Spicy" },
  { name: "Veggie Crisps", category: "Savory" },
  { name: "Chocolate Truffles", category: "Chocolatey" },
  { name: "Mint Chocolate Squares", category: "Chocolatey" },
  { name: "Orange Chocolate Segments", category: "Chocolatey" },
  { name: "Sour Gummies Mix", category: "Sour" },
  { name: "Tropical Fruit Mix", category: "Fruity" },
  { name: "Berry Mix Gummies", category: "Fruity" },
  { name: "Caramel Fudge", category: "Sweet" },
  { name: "Vanilla Fudge", category: "Sweet" },
  { name: "Spicy Crackers", category: "Spicy" },
  { name: "BBQ Nuts", category: "Savory" },
  { name: "Salted Cashews", category: "Salty" },
  { name: "Roasted Almonds", category: "Savory" },
  { name: "Honeycomb Pieces", category: "Sweet" },
  { name: "Chocolate Honeycomb", category: "Chocolatey" },
  { name: "Coconut Bites", category: "Sweet" },
  { name: "Coconut Crisps", category: "Crispy" },
  { name: "Spicy Rice Crackers", category: "Spicy" },
  { name: "Cheese Nachos", category: "Savory" },
  { name: "Garlic Bread Bites", category: "Savory" },
  { name: "Salted Breadsticks", category: "Crispy" },
  { name: "Chocolate Biscuit Bar", category: "Chocolatey" },
  { name: "Hazelnut Chocolate Bar", category: "Chocolatey" },
  { name: "White Chocolate Buttons", category: "Chocolatey" },
  { name: "Sour Cola Bottles", category: "Sour" },
  { name: "Lime Gummies", category: "Sour" },
  { name: "Cherry Gummies", category: "Fruity" },
  { name: "Peach Rings", category: "Fruity" },
  { name: "Watermelon Slices", category: "Fruity" },
  { name: "Spicy Corn Nuts", category: "Spicy" },
  { name: "Salted Corn Nuts", category: "Salty" },
  { name: "BBQ Corn Snacks", category: "Savory" },
  { name: "Cheese Balls", category: "Savory" },
  { name: "Chocolate Coated Biscuit Sticks", category: "Chocolatey" }
];

// this will hold the actual working snack list (defaults + generated + custom)
let snacks = [];

// per-snack ratings: { [snackName]: { score: number } }
let snackRatings =
  JSON.parse(localStorage.getItem("snackRatings_v2")) || {};

// per-category scores: { [category]: number }
let categoryScores =
  JSON.parse(localStorage.getItem("categoryScores_v2")) || {};

// total runs (how many fortunes shown)
let totalRuns = Number(localStorage.getItem("totalRuns_v2") || "0");

// track current snack being shown so rating knows what to update
let currentSnack = null;

// flag so you can't spam-click the cookie while it's animating
let isCracking = false;

/* ===========================
   INIT SNACK LIST
=========================== */

function buildDefaultSnackList() {
  // start with my hand-written defaults
  snacks = [...defaultSnacks];

  // pad out to at least 300 snacks with generic ones
  // (these are just filler but still valid "Misc" snacks)
  let countNeeded = 300 - snacks.length;
  if (countNeeded < 0) countNeeded = 0;

  for (let i = 1; i <= countNeeded; i++) {
    snacks.push({
      name: `Mystery Snack #${i}`,
      category: "Misc"
    });
  }
}

// load snacks from storage or build fresh
const storedSnacks = JSON.parse(localStorage.getItem("allSnacks_v2"));
if (Array.isArray(storedSnacks) && storedSnacks.length >= 1) {
  snacks = storedSnacks;
} else {
  buildDefaultSnackList();
  saveSnacks();
}

// make sure every category has a score entry
CATEGORIES.forEach((cat) => {
  if (typeof categoryScores[cat] !== "number") {
    categoryScores[cat] = 0;
  }
});

/* ===========================
   STORAGE HELPERS
=========================== */

function saveRatings() {
  localStorage.setItem("snackRatings_v2", JSON.stringify(snackRatings));
}

function saveCategoryScores() {
  localStorage.setItem("categoryScores_v2", JSON.stringify(categoryScores));
}

function saveSnacks() {
  localStorage.setItem("allSnacks_v2", JSON.stringify(snacks));
}

function saveTotalRuns() {
  localStorage.setItem("totalRuns_v2", String(totalRuns));
}

/* ===========================
   WEIGHTED RANDOM SNACK PICK
=========================== */

// simple-ish weighting: base weight 1, plus category score influence
// love = +2, hate = -2, so categories drift over time
function getSnackWeight(snack) {
  const catScore = categoryScores[snack.category] || 0;
  // base weight
  let weight = 1 + catScore * 0.4; // each +2 love = +0.8 weight
  // clamp so it never hits zero or negative
  if (weight < 0.2) weight = 0.2;
  return weight;
}

function pickWeightedRandomSnack() {
  let totalWeight = 0;
  const weights = snacks.map((snack) => {
    const w = getSnackWeight(snack);
    totalWeight += w;
    return w;
  });

  let r = Math.random() * totalWeight;
  for (let i = 0; i < snacks.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      return snacks[i];
    }
  }
  // fallback (shouldn't really happen)
  return snacks[snacks.length - 1];
}

/* ===========================
   COOKIE BREAK + FORTUNE FLOW
=========================== */

function resetToCookieScreen() {
  // reset text
  fortuneText.textContent =
    "click the fortune cookie to get a prediction!";

  // hide fortune + buttons
  fortuneStrip.classList.remove("visible");
  ratingButtons.classList.remove("visible");

  // reset halves
  cookieLeft.style.display = "none";
  cookieRight.style.display = "none";
  cookieLeft.classList.remove("fall-left");
  cookieRight.classList.remove("fall-right");
  cookieLeft.style.opacity = "0";
  cookieRight.style.opacity = "0";

  // show whole cookie again
  cookieWhole.style.display = "block";
  cookieWhole.classList.remove("shake");
  cookieWhole.classList.remove("grow");

  // allow clicking again
  isCracking = false;
  currentSnack = null;
}

cookieWhole.addEventListener("click", () => {
  // don't let user spam it while it's mid-animation
  if (isCracking) return;
  isCracking = true;

  // start with a shake
  cookieWhole.classList.add("shake");

  // after shake, do the "grow" and then split
  setTimeout(() => {
    cookieWhole.classList.add("grow");

    setTimeout(() => {
      // hide whole cookie
      cookieWhole.style.display = "none";

      // show halves and animate them falling
      cookieLeft.style.display = "block";
      cookieRight.style.display = "block";
      cookieLeft.style.opacity = "1";
      cookieRight.style.opacity = "1";

      cookieLeft.classList.add("fall-left");
      cookieRight.classList.add("fall-right");

      // after halves fall, show the fortune strip + buttons
      setTimeout(() => {
        showPrediction();
      }, 650);
    }, 150);
  }, 500);
});

function showPrediction() {
  const snack = pickWeightedRandomSnack();
  currentSnack = snack;

  fortuneText.textContent = snack.name;

  // show fortune "sliding out" of cookie
  fortuneStrip.classList.add("visible");

  // show rating buttons
  ratingButtons.classList.add("visible");

  // count this as a "run"
  totalRuns++;
  saveTotalRuns();
}

/* ===========================
   RATING SYSTEM
=========================== */

function applyRating(type) {
  if (!currentSnack) {
    return; // nothing to rate
  }

  const snackName = currentSnack.name;
  const snackCategory = currentSnack.category;

  if (!snackRatings[snackName]) {
    snackRatings[snackName] = { score: 0 };
  }

  let delta = 0;
  if (type === "love") delta = 2;
  if (type === "hate") delta = -2;
  // meh = 0, so no change

  // update snack score
  snackRatings[snackName].score += delta;

  // update category score
  categoryScores[snackCategory] += delta;

  // save stuff
  saveRatings();
  saveCategoryScores();

  // after rating, go back to cookie screen
  resetToCookieScreen();
}

loveBtn.addEventListener("click", () => applyRating("love"));
mehBtn.addEventListener("click", () => applyRating("meh"));
hateBtn.addEventListener("click", () => applyRating("hate"));

/* ===========================
   STATS MODAL
=========================== */

function closeStatsModal() {
  statsModal.style.display = "none";
}

statsBtn.addEventListener("click", () => {
  // build stats html fresh each time
  let html = `<h2>Your Snack Stats</h2>`;

  html += `<p><strong>Total fortunes shown:</strong> ${totalRuns}</p>`;

  // category scores
  html += `<h3>Category vibes</h3>`;
  html += `<ul>`;
  CATEGORIES.forEach((cat) => {
    const score = categoryScores[cat] || 0;
    html += `<li><strong>${cat}</strong>: ${score}</li>`;
  });
  html += `</ul>`;

  // top snacks (sorted by score)
  const ratedSnacks = Object.entries(snackRatings);
  if (ratedSnacks.length > 0) {
    ratedSnacks.sort((a, b) => b[1].score - a[1].score);
    html += `<h3>Top snacks (by score)</h3>`;
    html += `<ul>`;
    ratedSnacks.slice(0, 10).forEach(([name, data]) => {
      html += `<li><strong>${name}</strong>: ${data.score}</li>`;
    });
    html += `</ul>`;
  } else {
    html += `<p>You haven't rated any snacks yet. Crack that cookie!</p>`;
  }

  html += `
    <div class="modal-actions">
      <button onclick="(${closeStatsModal.toString()})();">Close</button>
    </div>
  `;

  statsModal.innerHTML = html;
  statsModal.style.display = "block";
});

/* ===========================
   CUSTOM SNACK MODAL
=========================== */

function closeCustomModal() {
  customModal.style.display = "none";
}

customBtn.addEventListener("click", () => {
  // build category options
  const options = CATEGORIES.map(
    (cat) => `<option value="${cat}">${cat}</option>`
  ).join("");

  const html = `
    <h2>Add a Custom Snack</h2>
    <div class="modal-field">
      <label for="newSnackInput">Snack name</label>
      <input id="newSnackInput" placeholder="e.g. Super Sour Mega Worms" />
    </div>
    <div class="modal-field">
      <label for="newSnackCategory">Category</label>
      <select id="newSnackCategory">
        ${options}
      </select>
    </div>
    <div class="modal-actions">
      <button id="cancelCustomSnackBtn">Cancel</button>
      <button id="addSnackBtn">Add snack</button>
    </div>
  `;

  customModal.innerHTML = html;
  customModal.style.display = "block";

  const addBtn = document.getElementById("addSnackBtn");
  const cancelBtn = document.getElementById("cancelCustomSnackBtn");
  const nameInput = document.getElementById("newSnackInput");
  const catSelect = document.getElementById("newSnackCategory");

  addBtn.onclick = () => {
    const newName = nameInput.value.trim();
    const newCat = catSelect.value;

    if (!newName) {
      alert("please type a snack name first :)");
      return;
    }

    snacks.push({ name: newName, category: newCat });
    saveSnacks();

    // make sure category has a score entry
    if (typeof categoryScores[newCat] !== "number") {
      categoryScores[newCat] = 0;
      saveCategoryScores();
    }

    closeCustomModal();
  };

  cancelBtn.onclick = () => {
    closeCustomModal();
  };
});

/* ===========================
   RESET EVERYTHING
=========================== */

resetBtn.addEventListener("click", () => {
  if (!confirm("Really reset ALL snack data?")) return;

  localStorage.removeItem("snackRatings_v2");
  localStorage.removeItem("categoryScores_v2");
  localStorage.removeItem("allSnacks_v2");
  localStorage.removeItem("totalRuns_v2");

  snackRatings = {};
  categoryScores = {};
  totalRuns = 0;

  // rebuild snacks + category scores
  buildDefaultSnackList();
  saveSnacks();
  CATEGORIES.forEach((cat) => {
    categoryScores[cat] = 0;
  });
  saveCategoryScores();

  resetToCookieScreen();
  alert("All snack data reset!");
});

/* ===========================
   INITIAL UI STATE
=========================== */

// make sure we start on the cookie screen
resetToCookieScreen();
