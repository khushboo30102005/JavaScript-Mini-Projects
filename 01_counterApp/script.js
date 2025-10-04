const myButton = document.querySelector("button");
const body = document.body;
const container = document.querySelector(".container");

const counterDisplay = document.createElement("div");
const quantityBtn = document.createElement("div");
const increaseButton = document.createElement("button");
const decreaseButton = document.createElement("button");
const reset = document.createElement("button");
const info = document.createElement("div");
info.innerHTML = `press: for increment: + & ⇧  <br/>for decrement: - & ⇩  , `;

quantityBtn.innerHTML = ` <label for="quantity">Counting Steps:</label>
<input type="number" class = "quantity" name="quantity" id="quantity" min="1" max="20" step="i"> `;

reset.innerText = "reset";
reset.classList.add("increase-button", "decrease-button", "reset");
counterDisplay.innerText = 0;
counterDisplay.classList.add("button");
counterDisplay.style.margin = "0 10px";

increaseButton.classList.add("increase-button");
increaseButton.setAttribute("title", "increase Number");
increaseButton.innerText = "+";

decreaseButton.classList.add("increase-button", "decrease-button");
decreaseButton.setAttribute("title", "decrease Number");
decreaseButton.innerText = "-";

container.append(
  counterDisplay,
  quantityBtn,
  increaseButton,
  decreaseButton,
  reset,
  info
);

const input = document.querySelector("#quantity");

input.value = localStorage.getItem("quantity") || 1;

input.addEventListener("input", (e) => {
  localStorage.setItem("quantity", input.value);
});

input.addEventListener("keydown", (event) => {
  event.stopPropagation();
});

function increment() {
  count += +input.value;
  counterDisplay.innerText = count;
}
function decrement() {
  count -= +input.value;
  counterDisplay.innerText = count;
}

let count = 0;
increaseButton.addEventListener("click", () => {
  increment();
});

decreaseButton.addEventListener("click", () => {
  decrement();
});
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      increment();
      break;
    case "+":
      increment();
      break;

    case "ArrowDown":
      decrement();
      break;

    case "-":
      decrement();
      break;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  counterDisplay.innerText = count;
});
