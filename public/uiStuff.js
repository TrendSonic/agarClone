let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
const canvas = document.getElementById("the-canvas");
const context = canvas.getContext("2d");
canvas.height = wHeight;
canvas.width = wWidth;
const player = {};
let orbs = [];

const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const spawnModal = new bootstrap.Modal(document.getElementById("spawnModal"));

window.addEventListener("load", () => {
  loginModal.show();
});

document.querySelector(".name-form").addEventListener("submit", (e) => {
  e.preventDefault();
  player.name = document.getElementById("name-input").value;
  loginModal.hide();
  document.querySelector(".player-name").innerHTML = player.name;
  spawnModal.show();
});

document.querySelector(".start-game").addEventListener("click", (e) => {
  spawnModal.hide();
  Array.from(document.querySelectorAll(".hiddenOnStart")).forEach((el) =>
    el.removeAttribute("hidden")
  );

  init();
});
