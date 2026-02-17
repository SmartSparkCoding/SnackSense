// the script file for my html lets hope this works
// Select the cookie image
const cookie = document.querySelector("#cookie-container img");

cookie.addEventListener("click", () => {
  cookie.classList.add("shake");

  // Remove the class after animation ends so it can play again
  setTimeout(() => {
    cookie.classList.remove("shake");
  }, 400);
});
