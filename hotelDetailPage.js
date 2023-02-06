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

adultCounterPlus.addEventListener("click", countUp);
adultCounterMinus.addEventListener("click", countDown);

function countUp() {
  adultCount++;
  adultCounter.innerHTML = adultCount;
}

function countDown() {
  if (adultCount > 0) {
    adultCount--;
    adultCounter.innerHTML = adultCount;
  }
}

// The counter for how many kids.
let kidCount = 0;

kidsCounterPlus.addEventListener("click", countUpKids);
kidsCounterMinus.addEventListener("click", countDownKids);

function countUpKids() {
  kidCount++;
  kidsCounter.innerHTML = kidCount;
}

function countDownKids() {
  if (kidCount > 0) {
    kidCount--;
    kidsCounter.innerHTML = kidCount;
  }
}

// booking
let bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", booking);

/* function booking() {
  if (kidCount >= 1 || adultCount >= 1 && ) {
    
  }
} */
