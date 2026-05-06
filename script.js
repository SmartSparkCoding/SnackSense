const cookieWhole = document.getElementById("cookie-whole");
const cookieLeft = document.getElementById("cookie-left");
const cookieRight = document.getElementById("cookie-right");

const fortuneStrip = document.getElementById("fortune-strip");
const fortuneText = document.getElementById("fortune-strip-text");

const ratingButtons = document.getElementById("rating-buttons");
const loveBtn = document.getElementById("love-button");
const mehBtn = document.getElementById("meh-button");
const hateBtn = document.getElementById("hate-button");

const statsBtn = document.getElementById("stats-btn");
const moreOptionsBtn = document.getElementById("more-options-btn");

const statsModal = document.getElementById("stats-modal");
const customModal = document.getElementById("custom-snack-modal");
const achievementsModal = document.getElementById("achievements-modal");
const moreOptionsModal = document.getElementById("more-options-modal");
const achievementToastContainer = document.getElementById("achievement-toast-container");
const themeToggle = document.getElementById("theme-toggle");
const THEME_STORAGE_KEY = "themeMode_v1";
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

let snacks = [];

let snackRatings =
  JSON.parse(localStorage.getItem("snackRatings_v2")) || {};

let categoryScores =
  JSON.parse(localStorage.getItem("categoryScores_v2")) || {};

let totalRuns = Number(localStorage.getItem("totalRuns_v2") || "0");

let currentSnack = null;

let isCracking = false;

let userStats = JSON.parse(localStorage.getItem("userStats_v1")) || {};

let achievementsUnlocked =
  JSON.parse(localStorage.getItem("achievementsUnlocked_v1")) || {};

let customSnacksAddedList =
  JSON.parse(localStorage.getItem("customSnacksAdded_v1")) || [];

let snackInventory =
  JSON.parse(localStorage.getItem("snackInventory_v1")) || {};

let shoppingList =
  JSON.parse(localStorage.getItem("shoppingList_v1")) || [];

const ACHIEVEMENTS = [
  {
    id: "votes_10",
    title: "Cookie Critic I",
    description: "Vote on 10 cookies.",
    rarity: "Common",
    check: (ctx) => ctx.totalVotes >= 10
  },
  {
    id: "votes_20",
    title: "Cookie Critic II",
    description: "Vote on 20 cookies.",
    rarity: "Common",
    check: (ctx) => ctx.totalVotes >= 20
  },
  {
    id: "votes_30",
    title: "Cookie Critic III",
    description: "Vote on 30 cookies.",
    rarity: "Common",
    check: (ctx) => ctx.totalVotes >= 30
  },
  {
    id: "votes_50",
    title: "Cookie Critic IV",
    description: "Vote on 50 cookies.",
    rarity: "Rare",
    check: (ctx) => ctx.totalVotes >= 50
  },
  {
    id: "votes_100",
    title: "Cookie Critic V",
    description: "Vote on 100 cookies.",
    rarity: "Rare",
    check: (ctx) => ctx.totalVotes >= 100
  },
  {
    id: "votes_200",
    title: "Cookie Critic VI",
    description: "Vote on 200 cookies.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 200
  },
  {
    id: "votes_250",
    title: "Cookie Critic VII",
    description: "Vote on 250 cookies.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 250
  },
  {
    id: "votes_400",
    title: "Cookie Critic VIII",
    description: "Vote on 400 cookies.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 400
  },
  {
    id: "votes_500",
    title: "Cookie Critic IX",
    description: "Vote on 500 cookies.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 500
  },
  {
    id: "votes_1000",
    title: "Cookie Critic X",
    description: "Vote on 1000 cookies.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 1000
  },
  {
    id: "love_10",
    title: "Love Button I",
    description: "Press Love 10 times.",
    rarity: "Common",
    check: (ctx) => ctx.loveVotes >= 10
  },
  {
    id: "love_20",
    title: "Love Button II",
    description: "Press Love 20 times.",
    rarity: "Common",
    check: (ctx) => ctx.loveVotes >= 20
  },
  {
    id: "love_50",
    title: "Love Button III",
    description: "Press Love 50 times.",
    rarity: "Rare",
    check: (ctx) => ctx.loveVotes >= 50
  },
  {
    id: "love_100",
    title: "Love Button IV",
    description: "Press Love 100 times.",
    rarity: "Legendary",
    check: (ctx) => ctx.loveVotes >= 100
  },
  {
    id: "meh_10",
    title: "Meh Button I",
    description: "Press Meh 10 times.",
    rarity: "Common",
    check: (ctx) => ctx.mehVotes >= 10
  },
  {
    id: "meh_20",
    title: "Meh Button II",
    description: "Press Meh 20 times.",
    rarity: "Common",
    check: (ctx) => ctx.mehVotes >= 20
  },
  {
    id: "meh_50",
    title: "Meh Button III",
    description: "Press Meh 50 times.",
    rarity: "Rare",
    check: (ctx) => ctx.mehVotes >= 50
  },
  {
    id: "meh_100",
    title: "Meh Button IV",
    description: "Press Meh 100 times.",
    rarity: "Legendary",
    check: (ctx) => ctx.mehVotes >= 100
  },
  {
    id: "hate_10",
    title: "Hate Button I",
    description: "Press HATE 10 times.",
    rarity: "Common",
    check: (ctx) => ctx.hateVotes >= 10
  },
  {
    id: "hate_20",
    title: "Hate Button II",
    description: "Press HATE 20 times.",
    rarity: "Common",
    check: (ctx) => ctx.hateVotes >= 20
  },
  {
    id: "hate_50",
    title: "Hate Button III",
    description: "Press HATE 50 times.",
    rarity: "Rare",
    check: (ctx) => ctx.hateVotes >= 50
  },
  {
    id: "hate_100",
    title: "Hate Button IV",
    description: "Press HATE 100 times.",
    rarity: "Legendary",
    check: (ctx) => ctx.hateVotes >= 100
  },
  {
    id: "picky_eater",
    title: "Picky Eater",
    description: "Get over 200 total category points and over 100 in one category.",
    rarity: "Rare",
    check: (ctx) => ctx.totalPositiveCategoryPoints > 200 && ctx.maxCategoryScore > 100
  },
  {
    id: "shown_5",
    title: "Fortune Opener I",
    description: "Open 5 fortunes.",
    rarity: "Common",
    check: (ctx) => ctx.snacksShown >= 5
  },
  {
    id: "shown_10",
    title: "Fortune Opener II",
    description: "Open 10 fortunes.",
    rarity: "Common",
    check: (ctx) => ctx.snacksShown >= 10
  },
  {
    id: "shown_25",
    title: "Fortune Opener III",
    description: "Open 25 fortunes.",
    rarity: "Common",
    check: (ctx) => ctx.snacksShown >= 25
  },
  {
    id: "shown_50",
    title: "Fortune Opener IV",
    description: "Open 50 fortunes.",
    rarity: "Rare",
    check: (ctx) => ctx.snacksShown >= 50
  },
  {
    id: "shown_100",
    title: "Fortune Opener V",
    description: "Open 100 fortunes.",
    rarity: "Rare",
    check: (ctx) => ctx.snacksShown >= 100
  },
  {
    id: "shown_200",
    title: "Fortune Opener VI",
    description: "Open 200 fortunes.",
    rarity: "Legendary",
    check: (ctx) => ctx.snacksShown >= 200
  },
  {
    id: "custom_1",
    title: "Snack Creator I",
    description: "Add 1 custom snack.",
    rarity: "Common",
    check: (ctx) => ctx.customSnacksAdded >= 1
  },
  {
    id: "custom_5",
    title: "Snack Creator II",
    description: "Add 5 custom snacks.",
    rarity: "Rare",
    check: (ctx) => ctx.customSnacksAdded >= 5
  },
  {
    id: "custom_10",
    title: "Snack Creator III",
    description: "Add 10 custom snacks.",
    rarity: "Rare",
    check: (ctx) => ctx.customSnacksAdded >= 10
  },
  {
    id: "custom_20",
    title: "Snack Creator IV",
    description: "Add 20 custom snacks.",
    rarity: "Legendary",
    check: (ctx) => ctx.customSnacksAdded >= 20
  },
  {
    id: "unique_5",
    title: "Taste Explorer I",
    description: "Rate 5 different snacks.",
    rarity: "Common",
    check: (ctx) => ctx.uniqueRatedSnacks >= 5
  },
  {
    id: "unique_10",
    title: "Taste Explorer II",
    description: "Rate 10 different snacks.",
    rarity: "Rare",
    check: (ctx) => ctx.uniqueRatedSnacks >= 10
  },
  {
    id: "unique_20",
    title: "Taste Explorer III",
    description: "Rate 20 different snacks.",
    rarity: "Rare",
    check: (ctx) => ctx.uniqueRatedSnacks >= 20
  },
  {
    id: "unique_40",
    title: "Taste Explorer IV",
    description: "Rate 40 different snacks.",
    rarity: "Legendary",
    check: (ctx) => ctx.uniqueRatedSnacks >= 40
  },
  {
    id: "unique_75",
    title: "Taste Explorer V",
    description: "Rate 75 different snacks.",
    rarity: "Legendary",
    check: (ctx) => ctx.uniqueRatedSnacks >= 75
  },
  {
    id: "category_20",
    title: "Category Specialist I",
    description: "Reach 20 points in one category.",
    rarity: "Rare",
    check: (ctx) => ctx.maxCategoryScore >= 20
  },
  {
    id: "category_40",
    title: "Category Specialist II",
    description: "Reach 40 points in one category.",
    rarity: "Rare",
    check: (ctx) => ctx.maxCategoryScore >= 40
  },
  {
    id: "category_60",
    title: "Category Specialist III",
    description: "Reach 60 points in one category.",
    rarity: "Legendary",
    check: (ctx) => ctx.maxCategoryScore >= 60
  },
  {
    id: "category_80",
    title: "Category Specialist IV",
    description: "Reach 80 points in one category.",
    rarity: "Legendary",
    check: (ctx) => ctx.maxCategoryScore >= 80
  },
  {
    id: "category_120",
    title: "Category Specialist V",
    description: "Reach 120 points in one category.",
    rarity: "Legendary",
    check: (ctx) => ctx.maxCategoryScore >= 120
  },
  {
    id: "sweet_tooth",
    title: "Sweet Spot",
    description: "Cast at least 25 Love votes and at least double your HATE votes.",
    rarity: "Rare",
    check: (ctx) => ctx.loveVotes >= 25 && ctx.loveVotes >= ctx.hateVotes * 2
  },
  {
    id: "balanced_taster",
    title: "Balanced Taster",
    description: "Use Love, Meh, and HATE at least 10 times each.",
    rarity: "Rare",
    check: (ctx) => ctx.loveVotes >= 10 && ctx.mehVotes >= 10 && ctx.hateVotes >= 10
  },
  {
    id: "controversial",
    title: "Controversial Palate",
    description: "Use HATE 50 times.",
    rarity: "Rare",
    check: (ctx) => ctx.hateVotes >= 50
  },
  {
    id: "neutral_master",
    title: "Neutral Master",
    description: "Use Meh 50 times.",
    rarity: "Rare",
    check: (ctx) => ctx.mehVotes >= 50
  },
  {
    id: "marathon_voter",
    title: "Marathon Voter",
    description: "Cast 1500 total votes.",
    rarity: "Legendary",
    check: (ctx) => ctx.totalVotes >= 1500
  }
];

if (!userStats || typeof userStats !== "object" || Array.isArray(userStats)) {
  userStats = {};
}

if (
  !achievementsUnlocked ||
  typeof achievementsUnlocked !== "object" ||
  Array.isArray(achievementsUnlocked)
) {
  achievementsUnlocked = {};
}

if (!Array.isArray(customSnacksAddedList)) {
  customSnacksAddedList = [];
}

customSnacksAddedList = customSnacksAddedList.filter(
  (item) => item && typeof item.name === "string" && typeof item.category === "string"
);

function ensureUserStatsShape() {
  const defaults = {
    totalVotes: 0,
    loveVotes: 0,
    mehVotes: 0,
    hateVotes: 0,
    snacksShown: 0,
    customSnacksAdded: 0,
    uniqueRatedSnacks: 0
  };

  Object.keys(defaults).forEach((key) => {
    if (typeof userStats[key] !== "number" || Number.isNaN(userStats[key])) {
      userStats[key] = defaults[key];
    }
  });

  if (userStats.snacksShown < totalRuns) {
    userStats.snacksShown = totalRuns;
  }

  const uniqueRated = Object.keys(snackRatings).length;
  if (userStats.uniqueRatedSnacks < uniqueRated) {
    userStats.uniqueRatedSnacks = uniqueRated;
  }
}

function buildDefaultSnackList() {
  snacks = [...defaultSnacks];

  const fillerSnacks = [
    "Marshmallow Twists", "Honeycomb Crunch", "Caramel Bites", "Vanilla Fudge",
    "Strawberry Laces", "Rainbow Drops", "Sugar Cookies", "Candy Floss",
    "Chocolate Wafers", "Mini Donuts", "Frosted Bites", "Caramel Swirls",

    "Sour Ribbons", "Sour Apple Chews", "Lemon Zingers", "Sour Melon Slices",
    "Sour Cherry Bombs", "Tangy Twists", "Sour Citrus Drops", "Mega Sour Mix",

    "Salted Pretzel Bites", "Sea Salt Crackers", "Salted Corn Chips",
    "Salted Breadsticks", "Salted Popcorn", "Salted Cashews",

    "Berry Chews", "Tropical Rings", "Peach Hearts", "Apple Gummies",
    "Fruit Bursts", "Mango Chews", "Pineapple Rings", "Berry Mix Drops",

    "Chili Crunch Bites", "Spicy Corn Nuts", "Hot Nacho Bites",
    "Fire Crackers", "Spicy Lentil Crisps", "Chili Popcorn",

    "Chocolate Cubes", "Hazelnut Crunch", "Milk Choc Drops",
    "Dark Choc Minis", "White Choc Stars", "Caramel Choc Squares",

    "Rice Crunch Bars", "Crispy Wafers", "Crunchy Sticks", "Crispy Puffs",
    "Crispy Honey Squares", "Crispy Corn Bites",

    "BBQ Crunchers", "Cheese Bites", "Garlic Bread Bites",
    "Herb Crackers", "Mini Pizza Bites", "Cheddar Squares"
  ];

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

  let fillerIndex = 0;
  while (snacks.length < 300) {
    const name = fillerSnacks[fillerIndex % fillerSnacks.length];
    const category = guessCategory(name);
    snacks.push({ name, category });
    fillerIndex++;
  }
}

const storedSnacks = JSON.parse(localStorage.getItem("allSnacks_v2"));
if (Array.isArray(storedSnacks) && storedSnacks.length >= 1) {
  snacks = storedSnacks;
} else {
  buildDefaultSnackList();
  saveSnacks();
}

CATEGORIES.forEach((cat) => {
  if (typeof categoryScores[cat] !== "number") {
    categoryScores[cat] = 0;
  }
});

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

function saveUserStats() {
  localStorage.setItem("userStats_v1", JSON.stringify(userStats));
}

function saveAchievementsUnlocked() {
  localStorage.setItem("achievementsUnlocked_v1", JSON.stringify(achievementsUnlocked));
}

function saveCustomSnacksAddedList() {
  localStorage.setItem("customSnacksAdded_v1", JSON.stringify(customSnacksAddedList));
}

function saveSnackInventory() {
  localStorage.setItem("snackInventory_v1", JSON.stringify(snackInventory));
}

function saveShoppingList() {
  localStorage.setItem("shoppingList_v1", JSON.stringify(shoppingList));
}

function getHighestRatedSnacks(limit = 10) {
  const rated = Object.entries(snackRatings)
    .map(([name, data]) => ({
      name,
      score: Number(data.score || 0),
      inInventory: snackInventory[name] || false
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  return rated;
}

function getLowStockSnacks(limit = 5) {
  const favorites = getHighestRatedSnacks(20);
  const lowStock = favorites.filter((s) => !s.inInventory).slice(0, limit);
  return lowStock;
}

function addToShoppingList(snackName) {
  if (!shoppingList.includes(snackName)) {
    shoppingList.push(snackName);
    saveShoppingList();
  }
}

function removeFromShoppingList(snackName) {
  shoppingList = shoppingList.filter((s) => s !== snackName);
  saveShoppingList();
}

function toggleInventory(snackName, hasIt) {
  snackInventory[snackName] = hasIt;
  saveSnackInventory();
}

function applyTheme(theme) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.body.setAttribute("data-theme", normalizedTheme);
  if (themeToggle) {
    themeToggle.checked = normalizedTheme === "dark";
  }
}

function initTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || storedTheme === "light") {
    applyTheme(storedTheme);
    return;
  }

  applyTheme(prefersDark ? "dark" : "light");
}

function setModalOpenState() {
  const anyModalOpen = [statsModal, customModal, achievementsModal, moreOptionsModal, document.getElementById("export-options-modal"), document.getElementById("reset-confirm-modal")].some(
    (modalEl) => modalEl && modalEl.style.display === "block"
  );
  document.body.classList.toggle("modal-open", anyModalOpen);
}

function getUserAddedCustomSnacks() {
  return customSnacksAddedList;
}

function drawVotePieChart(votesData) {
  const canvas = document.createElement("canvas");
  canvas.width = 540;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = 160;
  const centerY = 160;
  const radius = 100;
  const total = votesData.reduce((sum, item) => sum + item.value, 0);

  if (total <= 0) {
    ctx.fillStyle = "#666";
    ctx.font = "18px Inter, Arial";
    ctx.fillText("No vote data yet", 70, 165);
    return canvas;
  }

  let start = -Math.PI / 2;
  votesData.forEach((item) => {
    const angle = (item.value / total) * Math.PI * 2;
    const end = start + angle;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    start = end;
  });

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.font = "14px Inter, Arial";
  ctx.fillStyle = "#222";
  ctx.fillText("Vote Breakdown", 70, 28);

  let legendY = 80;
  votesData.forEach((item) => {
    ctx.fillStyle = item.color;
    ctx.fillRect(320, legendY - 10, 16, 16);
    ctx.fillStyle = "#222";
    ctx.fillText(`${item.label}: ${item.value}`, 346, legendY + 2);
    legendY += 30;
  });

  return canvas;
}

function drawCategoryBarChart() {
  const canvas = document.createElement("canvas");
  canvas.width = 620;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "var(--surface)";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const padding = 40;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  const barWidth = chartWidth / CATEGORIES.length - 8;
  const maxScore = Math.max(...CATEGORIES.map((cat) => Number(categoryScores[cat] || 0)), 1);
  const colors = ["#ff6b6b", "#ffa500", "#ffd93d", "#6bcf7f", "#4d79ff", "#c77dff", "#06ffa5", "#ff006e", "#8338ec"];

  ctx.font = "12px Inter, Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.fillText("Category Preferences", canvas.width / 2, 20);

  CATEGORIES.forEach((cat, idx) => {
    const score = Number(categoryScores[cat] || 0);
    const barHeight = (Math.max(score, 0) / maxScore) * chartHeight;
    const x = padding + idx * (barWidth + 8);
    const y = padding + chartHeight - barHeight;

    ctx.fillStyle = colors[idx % colors.length];
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = "#333";
    ctx.font = "11px Inter, Arial";
    ctx.textAlign = "center";
    ctx.fillText(cat, x + barWidth / 2, padding + chartHeight + 15);

    ctx.font = "10px Inter, Arial";
    ctx.fillStyle = "#666";
    ctx.fillText(String(score), x + barWidth / 2, y - 8);
  });

  return canvas;
}

function exportDataToPdf() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library failed to load. Please refresh and try again.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const left = 40;
  const right = pageWidth - 40;
  let y = 44;

  const userAddedCustomSnacks = getUserAddedCustomSnacks();
  const unlockedAchievementIds = ACHIEVEMENTS
    .filter((achievement) => !!achievementsUnlocked[achievement.id])
    .map((achievement) => achievement.id);

  function ensureSpace(heightNeeded) {
    if (y + heightNeeded <= pageHeight - 36) return;
    doc.addPage();
    y = 44;
  }

  function sectionTitle(text) {
    ensureSpace(30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(text, left, y);
    y += 16;
    doc.setDrawColor(31, 157, 141);
    doc.setLineWidth(1.2);
    doc.line(left, y, right, y);
    y += 14;
  }

  function lines(items, lineHeight = 14) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    items.forEach((line) => {
      const wrapped = doc.splitTextToSize(String(line), right - left);
      wrapped.forEach((chunk) => {
        ensureSpace(lineHeight + 2);
        doc.text(chunk, left, y);
        y += lineHeight;
      });
    });
    y += 4;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Snack Sense - Data Export", left, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleString()}`, left, y);
  y += 20;

  sectionTitle("Stats Summary");
  lines([
    `Fortunes shown: ${totalRuns}`,
    `Total votes: ${userStats.totalVotes}`,
    `Love votes: ${userStats.loveVotes}`,
    `Meh votes: ${userStats.mehVotes}`,
    `HATE votes: ${userStats.hateVotes}`,
    `Unique snacks rated: ${userStats.uniqueRatedSnacks}`,
    `Custom snacks added (tracked): ${userStats.customSnacksAdded}`,
    `Theme: ${document.body.getAttribute("data-theme") || "light"}`
  ]);

  sectionTitle("Vote Pie Chart");
  const chartCanvas = drawVotePieChart([
    { label: "Love", value: userStats.loveVotes, color: "#ff6b6b" },
    { label: "Meh", value: userStats.mehVotes, color: "#ffd93d" },
    { label: "HATE", value: userStats.hateVotes, color: "#6c757d" }
  ]);
  if (chartCanvas) {
    ensureSpace(220);
    doc.addImage(chartCanvas.toDataURL("image/png"), "PNG", left, y, 420, 248);
    y += 216;
  }

  sectionTitle("Achievements");
  lines([
    `Unlocked: ${unlockedAchievementIds.length}/${ACHIEVEMENTS.length}`
  ]);
  ACHIEVEMENTS.forEach((achievement) => {
    const unlockedAt = achievementsUnlocked[achievement.id];
    const status = unlockedAt
      ? `Unlocked (${new Date(unlockedAt).toLocaleDateString()})`
      : "Locked";
    lines([`- ${achievement.title}: ${status}`]);
  });

  sectionTitle("Category Scores");
  CATEGORIES.forEach((cat) => {
    lines([`- ${cat}: ${Number(categoryScores[cat] || 0)}`]);
  });

  sectionTitle("Custom Snacks");
  lines([
    `Custom snacks added by user: ${userAddedCustomSnacks.length}`
  ]);
  if (userAddedCustomSnacks.length === 0) {
    lines(["- None found"]);
  } else {
    userAddedCustomSnacks.forEach((snack) => {
      lines([`- ${snack.name} (${snack.category})`]);
    });
  }

  sectionTitle("Rated Snacks");
  const ratedSnacks = Object.entries(snackRatings)
    .map(([name, data]) => ({ name, score: Number(data.score || 0) }))
    .sort((a, b) => b.score - a.score);
  if (ratedSnacks.length === 0) {
    lines(["- None rated yet"]);
  } else {
    ratedSnacks.forEach((snack) => {
      lines([`- ${snack.name}: ${snack.score}`]);
    });
  }

  doc.save(`snacksense-data-export-${new Date().toISOString().slice(0, 10)}.pdf`);
}

function getAchievementContext() {
  const categoryValues = CATEGORIES.map((cat) => Number(categoryScores[cat] || 0));
  const maxCategoryScore = categoryValues.length > 0 ? Math.max(...categoryValues) : 0;
  const totalPositiveCategoryPoints = categoryValues.reduce(
    (sum, value) => sum + (value > 0 ? value : 0),
    0
  );

  return {
    totalVotes: userStats.totalVotes,
    loveVotes: userStats.loveVotes,
    mehVotes: userStats.mehVotes,
    hateVotes: userStats.hateVotes,
    snacksShown: userStats.snacksShown,
    customSnacksAdded: userStats.customSnacksAdded,
    uniqueRatedSnacks: userStats.uniqueRatedSnacks,
    maxCategoryScore,
    totalPositiveCategoryPoints
  };
}

function showAchievementToast(achievement) {
  if (!achievementToastContainer) return;

  const toast = document.createElement("div");
  toast.className = "achievement-toast";

  const heading = document.createElement("strong");
  heading.textContent = "Achievement unlocked";

  const title = document.createElement("div");
  title.textContent = achievement.title;

  const detail = document.createElement("div");
  detail.textContent = achievement.description;

  toast.appendChild(heading);
  toast.appendChild(title);
  toast.appendChild(detail);

  achievementToastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function evaluateAchievements(showToasts = true) {
  const ctx = getAchievementContext();
  const newlyUnlocked = [];

  ACHIEVEMENTS.forEach((achievement) => {
    if (achievementsUnlocked[achievement.id]) return;
    if (!achievement.check(ctx)) return;

    achievementsUnlocked[achievement.id] = Date.now();
    newlyUnlocked.push(achievement);
  });

  if (newlyUnlocked.length > 0) {
    saveAchievementsUnlocked();
    if (showToasts) {
      newlyUnlocked.forEach((achievement) => {
        showAchievementToast(achievement);
      });
    }
  }
}

function closeAchievementsModal() {
  achievementsModal.style.display = "none";
  setModalOpenState();
}

function renderAchievementsModal() {
  const unlockedCount = ACHIEVEMENTS.filter(
    (achievement) => !!achievementsUnlocked[achievement.id]
  ).length;

  let html = `<h2>Achievements</h2>`;
  html += `<p><strong>${unlockedCount}/${ACHIEVEMENTS.length}</strong> unlocked</p>`;
  html += `<div class="achievements-list">`;

  const sorted = [...ACHIEVEMENTS].sort((a, b) => {
    const aUnlocked = !!achievementsUnlocked[a.id];
    const bUnlocked = !!achievementsUnlocked[b.id];
    if (aUnlocked !== bUnlocked) return aUnlocked ? -1 : 1;
    return 0;
  });

  sorted.forEach((achievement) => {
    const unlockedAt = achievementsUnlocked[achievement.id];
    const stateClass = unlockedAt ? "unlocked" : "locked";
    const statusText = unlockedAt
      ? `Unlocked on ${new Date(unlockedAt).toLocaleDateString()}`
      : "Locked";
    const rarity = achievement.rarity || "Unknown";
    const rarityColor = rarity === "Legendary" ? "#ffd700" : rarity === "Rare" ? "#ff69b4" : "#999";

    html += `<div class="achievement-item ${stateClass}">`;
    html += `<h4>${achievement.title} <span style="color: ${rarityColor}; font-size: 0.85em;">[${rarity}]</span></h4>`;
    html += `<p>${achievement.description}</p>`;
    html += `<div class="achievement-meta">${statusText}</div>`;
    html += `</div>`;
  });

  html += `</div>`;
  html += `
    <div class="modal-actions">
      <button id="closeAchievementsBtn">Close</button>
    </div>
  `;

  achievementsModal.innerHTML = html;
  achievementsModal.style.display = "block";
  setModalOpenState();
  document.getElementById("closeAchievementsBtn").onclick = closeAchievementsModal;
}

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
  crackCookie();
});

function crackCookie() {
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
}

function showPrediction() {
  const snack = pickWeightedRandomSnack();
  currentSnack = snack;

  fortuneText.textContent = snack.name;

  fortuneStrip.classList.add("visible");

  ratingButtons.classList.add("visible");

  totalRuns++;
  userStats.snacksShown = totalRuns;
  saveTotalRuns();
  saveUserStats();
  evaluateAchievements();
}

function applyRating(type) {
  if (!currentSnack) {
    return;
  }

  const snackName = currentSnack.name;
  const snackCategory = currentSnack.category;
  const isNewSnackRating = !snackRatings[snackName];

  if (!snackRatings[snackName]) {
    snackRatings[snackName] = { score: 0 };
  }

  let delta = 0;
  if (type === "love") delta = 2;
  if (type === "hate") delta = -2;

  userStats.totalVotes += 1;
  if (type === "love") userStats.loveVotes += 1;
  if (type === "meh") userStats.mehVotes += 1;
  if (type === "hate") userStats.hateVotes += 1;

  snackRatings[snackName].score += delta;

  categoryScores[snackCategory] += delta;

  if (isNewSnackRating) {
    userStats.uniqueRatedSnacks = Object.keys(snackRatings).length;
  }

  saveRatings();
  saveCategoryScores();
  saveUserStats();
  evaluateAchievements();

  resetToCookieScreen();
}

loveBtn.addEventListener("click", () => applyRating("love"));
mehBtn.addEventListener("click", () => applyRating("meh"));
hateBtn.addEventListener("click", () => applyRating("hate"));

// More Options button
if (moreOptionsBtn) {
  moreOptionsBtn.addEventListener("click", showMoreOptionsModal);
}

// Keyboard shortcuts
document.addEventListener("keydown", (event) => {
  // Only activate if no modal is open and not typing in an input
  const anyModalOpen = [statsModal, customModal, achievementsModal, moreOptionsModal, document.getElementById("export-options-modal"), document.getElementById("reset-confirm-modal")].some(
    (modalEl) => modalEl && modalEl.style.display === "block"
  );
  
  const isTyping = event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.tagName === "SELECT";
  
  if (anyModalOpen || isTyping) return;
  
  const key = event.key.toLowerCase();
  
  if (event.code === "Space" || key === " ") {
    event.preventDefault();
    crackCookie();
  } else if (key === "l") {
    applyRating("love");
  } else if (key === "m") {
    applyRating("meh");
  } else if (key === "h") {
    applyRating("hate");
  }
});

function showExportOptionsModal() {
  const exportOptionsModal = document.getElementById("export-options-modal");
  let html = `<h2>Export Your Data</h2>`;
  html += `<p>Choose how you'd like to export your snack journey:</p>`;
  html += `
    <div class="modal-actions">
      <button id="exportPdfBtn" style="width: 100%; margin-bottom: 8px;">📊 Export as PDF</button>
      <button id="exportJsonBtn" style="width: 100%; margin-bottom: 8px;">💾 Export as JSON Backup</button>
      <button id="shareableCardBtn" style="width: 100%; margin-bottom: 8px;">🎨 Create Shareable Card</button>
      <button id="importJsonBtn" style="width: 100%; margin-bottom: 8px;">📂 Import from JSON</button>
      <button id="closeExportBtn" style="width: 100%;">Close</button>
    </div>
  `;

  exportOptionsModal.innerHTML = html;
  exportOptionsModal.style.display = "block";
  setModalOpenState();

  document.getElementById("exportPdfBtn").onclick = () => {
    exportDataToPdf();
    exportOptionsModal.style.display = "none";
    setModalOpenState();
  };

  document.getElementById("exportJsonBtn").onclick = () => {
    exportDataAsJson();
    exportOptionsModal.style.display = "none";
    setModalOpenState();
  };

  document.getElementById("shareableCardBtn").onclick = () => {
    showShareableCardOptions();
  };

  document.getElementById("importJsonBtn").onclick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        importDataFromJson(file);
        exportOptionsModal.style.display = "none";
        setModalOpenState();
      }
    };
    input.click();
  };

  document.getElementById("closeExportBtn").onclick = () => {
    exportOptionsModal.style.display = "none";
    setModalOpenState();
  };
}

function closeStatsModal() {
  statsModal.style.display = "none";
  setModalOpenState();
}

statsBtn.addEventListener("click", () => {
  let html = `<h2>Your Snack Stats</h2>`;

  const topCategory = CATEGORIES.reduce((best, cat) => {
    const bestScore = Number(categoryScores[best] || 0);
    const catScore = Number(categoryScores[cat] || 0);
    return catScore > bestScore ? cat : best;
  });
  const topCategoryScore = Number(categoryScores[topCategory] || 0);

  html += `<p><strong>Fortunes shown:</strong> ${totalRuns}</p>`;
  html += `<p><strong>Total votes:</strong> ${userStats.totalVotes}</p>`;
  html += `<p><strong>Unique snacks rated:</strong> ${userStats.uniqueRatedSnacks}</p>`;
  html += `<p><strong>Top category:</strong> ${topCategory} (${topCategoryScore} pts)</p>`;

  html += `<h3>Vote Breakdown</h3>`;
  html += `<ul>`;
  html += `<li>❤️ Love: ${userStats.loveVotes}</li>`;
  html += `<li>😐 Meh: ${userStats.mehVotes}</li>`;
  html += `<li>😠 HATE: ${userStats.hateVotes}</li>`;
  html += `</ul>`;

  // Shopping Assistant Section
  const topSnacks = getHighestRatedSnacks(8);
  if (topSnacks.length > 0) {
    html += `<h3>🛒 Your Shopping Assistant</h3>`;
    html += `<p style="font-size: 0.9em; opacity: 0.8;">Your highest-rated snacks to consider buying:</p>`;
    html += `<div id="shopping-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0;">`;
    topSnacks.forEach((snack) => {
      const inList = shoppingList.includes(snack.name);
      const inInventory = snackInventory[snack.name] || false;
      const btnColor = inInventory ? "#6bcf7f" : inList ? "#ffd93d" : "#e0e0e0";
      const btnText = inInventory ? "✓ Have It" : inList ? "+ To Buy" : "Add to List";
      html += `<div style="padding: 8px; border-radius: 6px; background: var(--surface-muted); display: flex; justify-content: space-between; align-items: center;">`;
      html += `<span style="font-size: 0.95em;"><strong>${snack.name}</strong></span>`;
      html += `<button class="shopping-toggle-btn" data-snack="${snack.name}" style="padding: 4px 10px; border: none; border-radius: 4px; background: ${btnColor}; cursor: pointer; font-size: 0.85em;">${btnText}</button>`;
      html += `</div>`;
    });
    html += `</div>`;
  }

  // Charts unlock after 20 cookies opened
  if (totalRuns >= 20) {
    html += `<h3>📊 Your Insights</h3>`;
    html += `<p style="font-size: 0.9em; opacity: 0.8;">Unlocked after opening 20 fortunes!</p>`;
    html += `<div id="chart-container" style="margin: 20px 0;"></div>`;
  } else {
    html += `<p style="font-size: 0.9em; opacity: 0.8;">💡 Open ${20 - totalRuns} more fortunes to unlock visual insights!</p>`;
  }

  html += `<h3>All Category Scores</h3>`;
  html += `<ul>`;
  CATEGORIES.forEach((cat) => {
    const score = categoryScores[cat] || 0;
    html += `<li><strong>${cat}</strong>: ${score}</li>`;
  });
  html += `</ul>`;

  const ratedSnacks = Object.entries(snackRatings);
  if (ratedSnacks.length > 0) {
    ratedSnacks.sort((a, b) => b[1].score - a[1].score);
    html += `<h3>Top rated snacks (${ratedSnacks.length} total)</h3>`;
    html += `<ul>`;
    ratedSnacks.forEach(([name, data]) => {
      html += `<li><strong>${name}</strong>: ${data.score}</li>`;
    });
    html += `</ul>`;
  } else {
    html += `<p>You haven't rated any snacks yet. Crack that cookie!</p>`;
  }

  html += `
    <div class="modal-actions">
      <button id="closeStatsBtn">Close</button>
    </div>
  `;

  statsModal.innerHTML = html;
  statsModal.style.display = "block";
  setModalOpenState();

  // Add charts if unlocked
  if (totalRuns >= 20) {
    const chartContainer = document.getElementById("chart-container");
    const categoryChart = drawCategoryBarChart();
    const voteChart = drawVotePieChart([
      { label: "Love", value: userStats.loveVotes, color: "#ff6b6b" },
      { label: "Meh", value: userStats.mehVotes, color: "#ffd93d" },
      { label: "HATE", value: userStats.hateVotes, color: "#6c757d" }
    ]);

    if (categoryChart) {
      const chartsWrapper = document.createElement("div");
      chartsWrapper.style.cssText = "display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px;";
      
      const categoryWrapper = document.createElement("div");
      categoryWrapper.appendChild(categoryChart);
      chartsWrapper.appendChild(categoryWrapper);

      if (voteChart) {
        const voteWrapper = document.createElement("div");
        voteWrapper.appendChild(voteChart);
        chartsWrapper.appendChild(voteWrapper);
      }

      chartContainer.appendChild(chartsWrapper);
    }
  }

  // Shopping list button handlers
  const shoppingBtns = statsModal.querySelectorAll(".shopping-toggle-btn");
  shoppingBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const snackName = btn.getAttribute("data-snack");
      const inInventory = snackInventory[snackName] || false;
      const inList = shoppingList.includes(snackName);

      if (inInventory) {
        toggleInventory(snackName, false);
      } else if (inList) {
        removeFromShoppingList(snackName);
      } else {
        addToShoppingList(snackName);
      }
      // Refresh stats to show updated shopping status
      statsBtn.click();
    });
  });

  document.getElementById("closeStatsBtn").onclick = closeStatsModal;
});

function showMoreOptionsModal() {
  let html = `<h2>More Options</h2>`;
  html += `<div class="more-options-menu">`;
  html += `<button id="add-custom-snack-opt" class="more-options-item">
    <div class="option-icon">🍬</div>
    <div class="option-text">
      <strong>Add Custom Snacks</strong>
      <span>Add your own snacks to the mix</span>
    </div>
  </button>`;
  html += `<button id="view-achievements-opt" class="more-options-item">
    <div class="option-icon">🏆</div>
    <div class="option-text">
      <strong>View Achievements</strong>
      <span>See your unlocked achievements</span>
    </div>
  </button>`;
  html += `<button id="export-data-opt" class="more-options-item">
    <div class="option-icon">📤</div>
    <div class="option-text">
      <strong>Export Data</strong>
      <span>Back up or share your data</span>
    </div>
  </button>`;
  html += `<button id="reset-data-opt" class="more-options-item danger">
    <div class="option-icon">⚠️</div>
    <div class="option-text">
      <strong>Reset All Data</strong>
      <span>Start fresh with a new profile</span>
    </div>
  </button>`;
  html += `</div>`;
  html += `<div class="modal-actions">
    <button id="closeMoreOptionsBtn">Close</button>
  </div>`;

  moreOptionsModal.innerHTML = html;
  moreOptionsModal.style.display = "block";
  setModalOpenState();

  document.getElementById("add-custom-snack-opt").onclick = () => {
    moreOptionsModal.style.display = "none";
    setModalOpenState();
    openCustomSnackModal();
  };

  document.getElementById("view-achievements-opt").onclick = () => {
    moreOptionsModal.style.display = "none";
    setModalOpenState();
    renderAchievementsModal();
  };

  document.getElementById("export-data-opt").onclick = () => {
    moreOptionsModal.style.display = "none";
    setModalOpenState();
    showExportOptionsModal();
  };

  document.getElementById("reset-data-opt").onclick = () => {
    moreOptionsModal.style.display = "none";
    setModalOpenState();
    showResetConfirmModal();
  };

  document.getElementById("closeMoreOptionsBtn").onclick = () => {
    moreOptionsModal.style.display = "none";
    setModalOpenState();
  };
}

function closeCustomModal() {
  customModal.style.display = "none";
  setModalOpenState();
}

function openCustomSnackModal() {
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
  setModalOpenState();

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

    customSnacksAddedList.push({
      name: newName,
      category: newCat,
      addedAt: Date.now()
    });
    saveCustomSnacksAddedList();

    userStats.customSnacksAdded += 1;
    saveUserStats();
    evaluateAchievements();

    if (typeof categoryScores[newCat] !== "number") {
      categoryScores[newCat] = 0;
      saveCategoryScores();
    }

    closeCustomModal();
  };

  cancelBtn.onclick = () => {
    closeCustomModal();
  };
}

// Custom and reset listeners are now through More Options modal
// This code removed in favor of More Options menu

function showResetConfirmModal() {
  const resetConfirmModal = document.getElementById("reset-confirm-modal");
  let html = `<h2>Reset All Data</h2>`;
  html += `<p>Do you want to export your data before resetting?</p>`;
  html += `
    <div class="modal-actions">
      <button id="exportPdfBeforeReset">Export as PDF</button>
      <button id="exportJsonBeforeReset">Export as JSON</button>
      <button id="skipExportReset">Skip Export</button>
      <button id="cancelReset">Cancel</button>
    </div>
  `;

  resetConfirmModal.innerHTML = html;
  resetConfirmModal.style.display = "block";
  setModalOpenState();

  document.getElementById("exportPdfBeforeReset").onclick = () => {
    exportDataToPdf();
    performReset();
  };

  document.getElementById("exportJsonBeforeReset").onclick = () => {
    exportDataAsJson();
    performReset();
  };

  document.getElementById("skipExportReset").onclick = () => {
    performReset();
  };

  document.getElementById("cancelReset").onclick = () => {
    resetConfirmModal.style.display = "none";
    setModalOpenState();
  };
}

function performReset() {
  localStorage.removeItem("snackRatings_v2");
  localStorage.removeItem("categoryScores_v2");
  localStorage.removeItem("allSnacks_v2");
  localStorage.removeItem("totalRuns_v2");
  localStorage.removeItem("userStats_v1");
  localStorage.removeItem("achievementsUnlocked_v1");
  localStorage.removeItem("customSnacksAdded_v1");

  snackRatings = {};
  categoryScores = {};
  totalRuns = 0;
  userStats = {
    totalVotes: 0,
    loveVotes: 0,
    mehVotes: 0,
    hateVotes: 0,
    snacksShown: 0,
    customSnacksAdded: 0,
    uniqueRatedSnacks: 0
  };
  achievementsUnlocked = {};
  customSnacksAddedList = [];

  buildDefaultSnackList();
  saveSnacks();
  CATEGORIES.forEach((cat) => {
    categoryScores[cat] = 0;
  });
  saveCategoryScores();
  saveUserStats();
  saveAchievementsUnlocked();
  saveCustomSnacksAddedList();

  closeStatsModal();
  closeCustomModal();
  closeAchievementsModal();
  document.getElementById("reset-confirm-modal").style.display = "none";
  setModalOpenState();

  resetToCookieScreen();
  showTutorial();
  alert("All snack data reset! Tutorial will start now.");
}

function exportDataAsJson() {
  const dataExport = {
    timestamp: new Date().toISOString(),
    stats: userStats,
    snackRatings: snackRatings,
    categoryScores: categoryScores,
    totalRuns: totalRuns,
    customSnacksAdded: customSnacksAddedList,
    achievementsUnlocked: achievementsUnlocked
  };

  const dataStr = JSON.stringify(dataExport, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `snacksense-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importDataFromJson(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.stats || !data.snackRatings) {
        alert("Invalid backup file format.");
        return;
      }

      userStats = data.stats || userStats;
      snackRatings = data.snackRatings || snackRatings;
      categoryScores = data.categoryScores || categoryScores;
      totalRuns = data.totalRuns || 0;
      customSnacksAddedList = data.customSnacksAdded || [];
      achievementsUnlocked = data.achievementsUnlocked || {};

      saveUserStats();
      saveRatings();
      saveCategoryScores();
      saveTotalRuns();
      saveCustomSnacksAddedList();
      saveAchievementsUnlocked();

      alert("Data imported successfully!");
      document.getElementById("import-file").value = "";
    } catch (err) {
      alert("Error reading file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function showShareableCardOptions() {
  const exportOptionsModal = document.getElementById("export-options-modal");
  let html = `<h2>Choose Card Style</h2>`;
  html += `<p>Select what you want to show:</p>`;
  html += `
    <div class="modal-actions">
      <button id="cardTopSnack" style="width: 100%; margin-bottom: 8px;">⭐ Top Snack</button>
      <button id="cardWorstSnack" style="width: 100%; margin-bottom: 8px;">😤 Worst Snack</button>
      <button id="cardAchievements" style="width: 100%; margin-bottom: 8px;">🏆 Achievement Count</button>
      <button id="cardVoteBreakdown" style="width: 100%; margin-bottom: 8px;">📊 Vote Breakdown</button>
      <button id="cardFavCategory" style="width: 100%; margin-bottom: 8px;">🎯 Favorite Category</button>
      <button id="backToExportBtn" style="width: 100%;">Back</button>
    </div>
  `;

  exportOptionsModal.innerHTML = html;

  document.getElementById("cardTopSnack").onclick = () => {
    generateShareableCard("topSnack");
  };

  document.getElementById("cardWorstSnack").onclick = () => {
    generateShareableCard("worstSnack");
  };

  document.getElementById("cardAchievements").onclick = () => {
    generateShareableCard("achievements");
  };

  document.getElementById("cardVoteBreakdown").onclick = () => {
    generateShareableCard("voteBreakdown");
  };

  document.getElementById("cardFavCategory").onclick = () => {
    generateShareableCard("favCategory");
  };

  document.getElementById("backToExportBtn").onclick = () => {
    showExportOptionsModal();
  };
}

function generateShareableCard(cardType) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");

  // Helper functions
  const drawRoundedRect = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  // Card backgrounds by type
  const cardConfigs = {
    topSnack: {
      gradient: ["#FF6B6B", "#FF8E72"],
      emoji: "❤️",
      accentColor: "#FF5252"
    },
    worstSnack: {
      gradient: ["#6C757D", "#495057"],
      emoji: "😤",
      accentColor: "#495057"
    },
    achievements: {
      gradient: ["#FFD93D", "#FFC107"],
      emoji: "🏆",
      accentColor: "#FFA500"
    },
    voteBreakdown: {
      gradient: ["#4D79FF", "#7B68EE"],
      emoji: "📊",
      accentColor: "#6B5FFF"
    },
    favCategory: {
      gradient: ["#06FFA5", "#00D98E"],
      emoji: "🎯",
      accentColor: "#00C77D"
    }
  };

  const config = cardConfigs[cardType] || cardConfigs.topSnack;

  // Background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  bgGradient.addColorStop(0, config.gradient[0]);
  bgGradient.addColorStop(1, config.gradient[1]);
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1080, 1080);

  // Decorative elements - light circles in background
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.arc(150, 150, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(900, 900, 250, 0, Math.PI * 2);
  ctx.fill();

  // Top accent bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, 0, 1080, 8);

  // Main content area with rounded background
  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  drawRoundedRect(80, 200, 920, 600, 30);
  ctx.fill();

  // Border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.lineWidth = 3;
  drawRoundedRect(80, 200, 920, 600, 30);
  ctx.stroke();

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  // Large emoji at top
  ctx.font = "120px Arial";
  ctx.fillText(config.emoji, 540, 360);

  let title = "";
  let content = "";
  let subtitle = "";

  if (cardType === "topSnack") {
    const ratedSnacks = Object.entries(snackRatings);
    if (ratedSnacks.length > 0) {
      ratedSnacks.sort((a, b) => b[1].score - a[1].score);
      const topSnack = ratedSnacks[0];
      title = "My Top Snack";
      content = topSnack[0];
      subtitle = `Loved ${topSnack[1].score} times`;
    } else {
      title = "No Snacks Yet";
      content = "Rate some snacks!";
    }
  } else if (cardType === "worstSnack") {
    const ratedSnacks = Object.entries(snackRatings);
    if (ratedSnacks.length > 0) {
      ratedSnacks.sort((a, b) => a[1].score - b[1].score);
      const worstSnack = ratedSnacks[0];
      title = "My Least Favorite";
      content = worstSnack[0];
      subtitle = `Score: ${worstSnack[1].score}`;
    } else {
      title = "No Snacks Yet";
      content = "Rate some snacks!";
    }
  } else if (cardType === "achievements") {
    const unlockedCount = ACHIEVEMENTS.filter(
      (a) => !!achievementsUnlocked[a.id]
    ).length;
    title = "Achievements Unlocked";
    content = `${unlockedCount}`;
    subtitle = `out of ${ACHIEVEMENTS.length}`;
    ctx.font = "80px 'Cause', cursive";
    ctx.fillText(content, 540, 500);
  } else if (cardType === "voteBreakdown") {
    title = "My Vote Breakdown";
    ctx.font = "60px 'Cause', cursive";
    ctx.fillText(title, 540, 320);
    
    ctx.font = "40px 'Cause', cursive";
    ctx.fillText(`❤️ Love: ${userStats.loveVotes}`, 540, 450);
    ctx.fillText(`😐 Meh: ${userStats.mehVotes}`, 540, 550);
    ctx.fillText(`😠 HATE: ${userStats.hateVotes}`, 540, 650);

    // Accent line
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 700);
    ctx.lineTo(880, 700);
    ctx.stroke();

    ctx.font = "32px 'Cause', cursive";
    ctx.fillText(`Total Votes: ${userStats.totalVotes}`, 540, 780);

    ctx.font = "24px 'Cause', cursive";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillText("SnackSense 🍪 Made with 💫 by Jacob", 540, 1000);
    downloadCardImage(canvas);
    return;
  } else if (cardType === "favCategory") {
    const topCategory = CATEGORIES.reduce((best, cat) => {
      const bestScore = Number(categoryScores[best] || 0);
      const catScore = Number(categoryScores[cat] || 0);
      return catScore > bestScore ? cat : best;
    });
    const score = categoryScores[topCategory] || 0;
    title = "Favorite Category";
    content = topCategory;
    subtitle = `${score} preference points`;
  }

  // Title
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "42px 'Cause', cursive";
  ctx.fillText(title, 540, 440);

  // Main content
  if (cardType !== "achievements") {
    ctx.fillStyle = "white";
    ctx.font = "bold 70px 'Cause', cursive";
    ctx.fillText(content, 540, 600);
  }

  // Subtitle
  if (subtitle) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    ctx.font = "32px 'Cause', cursive";
    ctx.fillText(subtitle, 540, 680);
  }

  // Accent line separator
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(200, 730);
  ctx.lineTo(880, 730);
  ctx.stroke();
  ctx.setLineDash([]);

  // Footer branding
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.font = "28px 'Cause', cursive";
  ctx.fillText("SnackSense 🍪", 540, 850);

  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "22px 'Cause', cursive";
  ctx.fillText("Made with 💫 by Jacob", 540, 920);

  ctx.font = "18px Arial";
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.fillText("jacob.navaratne.studio", 540, 980);

  // Bottom accent bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, 1072, 1080, 8);

  downloadCardImage(canvas);
}

function downloadCardImage(canvas) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `snacksense-card-${new Date().toISOString().slice(0, 10)}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  document.getElementById("export-options-modal").style.display = "none";
  setModalOpenState();
}

function showTutorial() {
  const steps = [
    {
      element: "#cookie-whole",
      title: "Start Here",
      text: "Click the fortune cookie, or press Space, to reveal a snack prediction.",
      hint: "Open the cookie"
    },
    {
      element: "#rating-buttons",
      title: "Teach the App",
      text: "Use Love, Meh, and HATE to shape future predictions. Keyboard shortcuts work too: L, M, and H.",
      hint: "Rate the snack"
    },
    {
      element: "#stats-btn",
      title: "Your Stats",
      text: "See your taste profile, charts, shopping assistant, and snack history in one place.",
      hint: "Open your stats"
    },
    {
      element: "#more-options-btn",
      title: "More Options",
      text: "Manage custom snacks, achievements, exports, and reset tools from one cleaner menu.",
      hint: "Open more options"
    },
    {
      element: "#theme-toggle-wrap",
      title: "Theme Toggle",
      text: "Switch between light and dark mode whenever you want a different vibe.",
      hint: "Try the theme switch"
    }
  ];

  const overlay = document.getElementById("tutorial-overlay");
  const pointer = document.getElementById("tutorial-pointer");
  let tooltip = null;
  let currentStep = 0;
  let cleanupTimer = null;
  let stepCleanup = [];

  const clearStepCleanup = () => {
    stepCleanup.forEach((cleanup) => cleanup());
    stepCleanup = [];
  };

  const addStepCleanup = (cleanup) => {
    stepCleanup.push(cleanup);
  };

  const advanceStep = () => {
    clearStepCleanup();
    currentStep += 1;
    renderStep();
  };

  const watchForPrediction = () => {
    let cancelled = false;
    const startedAt = performance.now();

    addStepCleanup(() => {
      cancelled = true;
    });

    const tick = () => {
      if (cancelled) {
        return;
      }

      if (document.body.classList.contains("tutorial-active") && fortuneStrip.classList.contains("visible")) {
        advanceStep();
        return;
      }

      if (performance.now() - startedAt > 3200) {
        advanceStep();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const removeTooltip = () => {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  };

  const closeTutorial = () => {
    document.body.classList.remove("tutorial-active");
    overlay.classList.remove("visible");
    pointer.classList.remove("visible");
    clearStepCleanup();
    removeTooltip();
    window.removeEventListener("resize", refreshCurrentStep);
    if (cleanupTimer) {
      clearTimeout(cleanupTimer);
      cleanupTimer = null;
    }
    setTimeout(() => {
      overlay.style.display = "none";
      pointer.style.display = "none";
    }, 240);
  };

  const getTooltipPlacement = (rect) => {
    const width = Math.min(360, window.innerWidth - 32);
    const height = 210;
    const aboveSpace = rect.top;
    const belowSpace = window.innerHeight - rect.bottom;
    const placeBelow = belowSpace > height + 24 || aboveSpace < height;

    let top = placeBelow ? rect.bottom + 18 : rect.top - height - 18;
    top = Math.max(16, Math.min(window.innerHeight - height - 16, top));

    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(16, Math.min(window.innerWidth - width - 16, left));

    return { top, left, width, height, placeBelow };
  };

  const renderStep = () => {
    if (currentStep >= steps.length) {
      closeTutorial();
      return;
    }

    const step = steps[currentStep];
    const element = document.querySelector(step.element);
    if (!element) {
      currentStep++;
      renderStep();
      return;
    }

    const rect = element.getBoundingClientRect();
    const paddingX = 16;
    const paddingY = 12;
    const pointerRect = {
      left: Math.max(8, rect.left - paddingX),
      top: Math.max(8, rect.top - paddingY),
      width: Math.min(window.innerWidth - 16, rect.width + paddingX * 2),
      height: Math.min(window.innerHeight - 16, rect.height + paddingY * 2)
    };

    overlay.style.display = "block";
    overlay.style.pointerEvents = "none";
    overlay.innerHTML = `
      <div class="tutorial-shade tutorial-shade-top" style="height:${Math.max(0, pointerRect.top)}px"></div>
      <div class="tutorial-shade tutorial-shade-left" style="top:${pointerRect.top}px; height:${pointerRect.height}px; width:${Math.max(0, pointerRect.left)}px"></div>
      <div class="tutorial-shade tutorial-shade-right" style="top:${pointerRect.top}px; left:${pointerRect.left + pointerRect.width}px; height:${pointerRect.height}px; width:${Math.max(0, window.innerWidth - (pointerRect.left + pointerRect.width))}px"></div>
      <div class="tutorial-shade tutorial-shade-bottom" style="top:${pointerRect.top + pointerRect.height}px; height:${Math.max(0, window.innerHeight - (pointerRect.top + pointerRect.height))}px"></div>
    `;
    pointer.style.display = "block";
    document.body.classList.add("tutorial-active");

    overlay.classList.add("visible");
    pointer.classList.add("visible");
    pointer.style.left = `${pointerRect.left}px`;
    pointer.style.top = `${pointerRect.top}px`;
    pointer.style.width = `${pointerRect.width}px`;
    pointer.style.height = `${pointerRect.height}px`;

    clearStepCleanup();
    removeTooltip();
    const placement = getTooltipPlacement(rect);
    tooltip = document.createElement("div");
    tooltip.className = `tutorial-card ${placement.placeBelow ? "below" : "above"}`;
    tooltip.style.top = `${placement.top}px`;
    tooltip.style.left = `${placement.left}px`;
    tooltip.style.width = `${placement.width}px`;

    tooltip.innerHTML = `
      <div class="tutorial-card-kicker">Step ${currentStep + 1} of ${steps.length}</div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
      <div class="tutorial-card-meta">
        <span>${step.hint}</span>
        <button type="button" id="tutorial-next-btn">${currentStep === steps.length - 1 ? "Finish" : "Next"}</button>
      </div>
    `;

    document.body.appendChild(tooltip);

    const nextBtn = tooltip.querySelector("#tutorial-next-btn");
    nextBtn.onclick = advanceStep;

    if (currentStep === 0) {
      const onCookieClick = () => watchForPrediction();
      const onSpaceKey = (event) => {
        if (event.code === "Space" || event.key === " ") {
          watchForPrediction();
        }
      };

      cookieWhole.addEventListener("click", onCookieClick);
      addStepCleanup(() => cookieWhole.removeEventListener("click", onCookieClick));
      document.addEventListener("keydown", onSpaceKey);
      addStepCleanup(() => document.removeEventListener("keydown", onSpaceKey));
    } else if (currentStep === 1) {
      const onRatingClick = () => advanceStep();
      const onRatingKey = (event) => {
        const key = event.key.toLowerCase();
        if (key === "l" || key === "m" || key === "h") {
          advanceStep();
        }
      };

      loveBtn.addEventListener("click", onRatingClick);
      mehBtn.addEventListener("click", onRatingClick);
      hateBtn.addEventListener("click", onRatingClick);
      addStepCleanup(() => loveBtn.removeEventListener("click", onRatingClick));
      addStepCleanup(() => mehBtn.removeEventListener("click", onRatingClick));
      addStepCleanup(() => hateBtn.removeEventListener("click", onRatingClick));
      document.addEventListener("keydown", onRatingKey);
      addStepCleanup(() => document.removeEventListener("keydown", onRatingKey));
    } else if (currentStep === 2) {
      const onStatsClick = () => advanceStep();
      statsBtn.addEventListener("click", onStatsClick);
      addStepCleanup(() => statsBtn.removeEventListener("click", onStatsClick));
    } else if (currentStep === 3) {
      const onMoreOptionsClick = () => advanceStep();
      moreOptionsBtn.addEventListener("click", onMoreOptionsClick);
      addStepCleanup(() => moreOptionsBtn.removeEventListener("click", onMoreOptionsClick));
    } else if (currentStep === 4) {
      const onThemeChange = () => advanceStep();
      themeToggle.addEventListener("change", onThemeChange);
      addStepCleanup(() => themeToggle.removeEventListener("change", onThemeChange));
    }

    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  const refreshCurrentStep = () => {
    if (document.body.classList.contains("tutorial-active")) {
      renderStep();
    }
  };

  setTimeout(() => {
    if (currentStep === 0) {
      renderStep();
      window.addEventListener("resize", refreshCurrentStep);
      cleanupTimer = setTimeout(() => {}, 0);
    }
  }, 900);
}

ensureUserStatsShape();
saveUserStats();
evaluateAchievements(false);
resetToCookieScreen();
initTheme();

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    const nextTheme = themeToggle.checked ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}