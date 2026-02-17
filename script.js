// script.js – snack sense v2 logic

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
  { name: "Popcorn Chicken Bites", category: "Savory" },
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

// this will hold the actual working snack list (defaults + filler + custom)
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
   FIXED SNACK LIST BUILDER
=========================== */

function buildDefaultSnackList() {
  // start with my hand-written defaults
  snacks = [...defaultSnacks];

  // real filler snacks instead of mystery ones
  const fillerSnacks = [
    // sweet
    "Marshmallow Twists", "Honeycomb Crunch", "Caramel Bites", "Vanilla Fudge",
    "Strawberry Laces", "Rainbow Drops", "Sugar Cookies", "Candy Floss",
    "Chocolate Wafers", "Mini Donuts", "Frosted Bites", "Caramel Swirls",

    // sour
    "Sour Ribbons", "Sour Apple Chews", "Lemon Zingers", "Sour Melon Slices",
    "Sour Cherry Bombs", "Tangy Twists", "Sour Citrus Drops", "Mega Sour Mix",

    // salty
    "Salted Pretzel Bites", "Sea Salt Crackers", "Salted Corn Chips",
    "Salted Breadsticks", "Salted Popcorn", "Salted Cashews",

    // fruity
    "Berry Chews", "Tropical Rings", "Peach Hearts", "Apple Gummies",
    "Fruit Bursts", "Mango Chews", "Pineapple Rings", "Berry Mix Drops",

    // spicy
    "Chili Crunch Bites", "Spicy Corn Nuts", "Hot Nacho Bites",
    "Fire Crackers", "Spicy Lentil Crisps", "Chili Popcorn",

    // chocolatey
    "Chocolate Cubes", "Hazelnut Crunch", "Milk Choc Drops",
    "Dark Choc Minis", "White Choc Stars", "Caramel Choc Squares",

    // crispy
    "Rice Crunch Bars", "Crispy Wafers", "Crunchy Sticks", "Crispy Puffs",
    "Crispy Honey Squares", "Crispy Corn Bites",

    // savory
    "BBQ Crunchers", "Cheese Bites", "Garlic Bread Bites",
    "Herb Crackers", "Mini Pizza Bites", "Cheddar Squares"
  ];

  // helper to guess category
  function guessCategory(name) {
    const n = name.toLowerCase();
    if (n.includes("sour")) return "Sour";
    if (n.includes("salt")) return "Salty";
    if (n.includes("choc")) return "Chocolatey";
    if (n.includes("spicy") || n.includes("chili") || n.includes("hot")) return "Spicy";
    if (n.includes("berry") || n.includes("fruit") || n.includes("peach") || n.includes("mango")) return "Fruity";
    if (n.includes("crispy") || n.includes("crunch") || n.includes("crisp")) return "Crispy";
    if (n.includes("bbq") || n.includes("cheese") || n.includes("garlic") || n.includes("herb")) return "Savory";
    if (n.includes("caramel") || n.includes("donut") || n.includes("fudge") || n.includes("candy")) return "Sweet";
    return "Misc";
  }

  // fill until we hit 300 snacks
  let fillerIndex = 0;
  while (snacks.length < 300) {
    const name = fillerSnacks[fillerIndex % fillerSnacks.length];
    const category = guessCategory(name);
    snacks.push({ name, category });
    fillerIndex++;
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

function getSnackWeight(snack) {
  const catScore = categoryScores[snack.category] || 0;
  let weight = 1 + catScore * 0.4;
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
  return snacks[snacks.length - 1];
}

/* ===========================
   COOKIE BREAK + FORTUNE FLOW
=========================== */

function resetToCookieScreen() {
  fortuneText.textContent =
    "click the fortune cookie to get a prediction!";

  fortuneStrip.classList.remove("visible");
  ratingButtons.classList.remove("visible");

  cookieLeft.style.display = "none";
  cookieRight.style.display = "none";
  cookieLeft.classList.remove("fall-left");
  cookieRight.classList.remove("fall-right");
  cookieLeft.style.opacity = "0";
  cookieRight.style.opacity = "0";

  cookieWhole.style.display = "block";
  cookieWhole.classList.remove("shake");
  cookieWhole.classList.remove("grow");

  isCracking = false;
  currentSnack = null;
}

cookieWhole.addEventListener("click", () => {
  if (isCracking) return;
  isCracking = true;

  cookieWhole.classList.add("shake");

  setTimeout(() => {
    cookieWhole.classList.add("grow");

    setTimeout(() => {
      cookieWhole.style.display = "none";

      cookieLeft.style.display = "block";
      cookieRight.style.display = "block";
      cookieLeft.style.opacity = "1";
      cookieRight.style.opacity = "1";

      cookieLeft.classList.add("fall-left");
      cookieRight.classList.add("fall-right");

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

  fortuneStrip.classList.add("visible");
  ratingButtons.classList.add("visible");

  totalRuns++;
  saveTotalRuns();
}

/* ===========================
   RATING SYSTEM
=========================== */

function applyRating(type) {
  if (!currentSnack) return;

  const snackName = currentSnack.name;
  const snackCategory = currentSnack.category;

  if (!snackRatings[snackName]) {
    snackRatings[snackName] = { score: 0 };
  }

  let delta = 0;
  if (type === "love") delta = 2;
  if (type === "hate") delta = -2;

  snackRatings[snackName].score += delta;
  categoryScores[snackCategory] += delta;

  saveRatings();
  saveCategoryScores();

  resetToCookieScreen();
}

loveBtn.addEventListener("click", () => applyRating("love"));
mehBtn.addEventListener("click", () => applyRating("meh"));
hateBtn.addEventListener("click", () => applyRating("hate"));

/* ===========================
   STATS MODAL
=========================== */

function closeStatsModal()
