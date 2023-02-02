// COUNTER
let counterDisplay = document.querySelector(".counter-display");
let counterMinus = document.querySelector(".counter-minus");
let counterPlus = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlus.addEventListener("click", () => {
  count++;
  updateDisplay();
});

counterMinus.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  if (count < 0) {
    counterDisplay.innerHTML = "0";
  } else {
    counterDisplay.innerHTML = count;
  }
}

// PURCHASE BUTTON

const payment = document.getElementById("buy-text");
payment.innerHTML = "Purchase";

payment.addEventListener("click", () => {
  payment.innerHTML = "Confirming...";
  setTimeout(() => {
    let person = prompt(
      "Please enter your e-adress for order confirmation:",
      "name@example.com"
    );
    if (person == null || person == "") {
      alert("Invalid email.");
      payment.innerHTML = "Failed, try again.";
    } else {
      alert(
        "Order confirmation sent to: \n" +
          person +
          "\n" +
          count +
          " ticket(s) purchased!"
      );
      payment.innerHTML = "Purchased!";
    }
  }, 2000);
});
