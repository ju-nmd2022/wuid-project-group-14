// adult counter
let adultCounter = document.getElementById("adultCounter");
let adultCounterMinus = document.getElementById("adultCounterMinus");
let adultCounterPlus = document.getElementById("adultCounterPlus");

// kids counter
let kidsCounter = document.getElementById("kidsCounter");
let kidsCounterMinus = document.getElementById("kidsCounterMinus");
let kidsCounterPlus = document.getElementById("kidsCounterPlus");

// The counter for how many adults.
let adultCount = 0;

adultCounterPlus.addEventListener("click", function () {
  adultCount++;
  adultCounter.innerHTML = adultCount;
});

adultCounterMinus.addEventListener("click", function () {
  if (adultCount > 0) {
    adultCount--;
    adultCounter.innerHTML = adultCount;
  }
});

// The counter for how many kids.
let kidCount = 0;

kidsCounterPlus.addEventListener("click", function () {
  kidCount++;
  kidsCounter.innerHTML = kidCount;
});

kidsCounterMinus.addEventListener("click", function () {
  if (kidCount > 0) {
    kidCount--;
    kidsCounter.innerHTML = kidCount;
  }
});

// booking
let bookButton = document.getElementById("bookButton");
let popup = document.getElementById("popup");
let dateCheckIn = document.getElementById("dateCheckIn");
let dateCheckOut = document.getElementById("dateCheckOut");

let dateCheckInInputFilled = false;
let dateCheckOutInputFilled = false;

dateCheckIn.addEventListener("input", function () {
  dateCheckInInputFilled = true;
});

dateCheckOut.addEventListener("input", function () {
  dateCheckOutInputFilled = true;
});

bookButton.addEventListener("click", function () {
  if (
    kidCount >= 0 &&
    adultCount >= 1 &&
    dateCheckInInputFilled === true &&
    dateCheckOutInputFilled === true
  ) {
    popup.style.visibility = "visible";
  } else {
    alert("Information missing");
  }
});

// confirmation
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let confirmButton = document.getElementById("confirm");

let emailInputFilled = false;

email.addEventListener("input", function () {
  emailInputFilled = true;
});

let phoneInputFilled = false;

phone.addEventListener("input", function () {
  phoneInputFilled = true;
});

confirmButton.addEventListener("click", function () {
  if (emailInputFilled === true && phoneInputFilled === true) {
    alert("Confirmation sent to email!");
  } else {
    alert("Information missing!");
  }
});

let closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function () {
  popup.style.visibility = "hidden";
});
