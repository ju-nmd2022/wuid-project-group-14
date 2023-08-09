let nameInput = document.getElementById("name");
let arrivalInput = document.getElementById("arrival");
let flightInput = document.getElementById("flight");
let airportInput = document.getElementById("airport");
let passengerInput = document.getElementById("passenger");
let submitButton = document.getElementById("book");
let popUp = document.getElementById("popup");
let content = document.getElementById("content");

// declarations for input

let isName = false;
let isArrival = false;
let isFlight = false;
let isAirport = false;
let isPassenger = false;

// event listener for tracking input

nameInput.addEventListener("input", function () {
  isName = true;
});

arrivalInput.addEventListener("input", function () {
  isArrival = true;
});

flightInput.addEventListener("input", function () {
  isFlight = true;
});

airportInput.addEventListener("input", function () {
  isAirport = true;
});

passengerInput.addEventListener("input", function () {
  isPassenger = true;
});

// result output

submitButton.addEventListener("click", function () {
  if (isName && isArrival && isFlight && isAirport && isPassenger) {
    alert("Booking Deatils Sent Successfully.");
  } else {
    alert("Information Required.");
  }
});
