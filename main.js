// COUNTER 
let counterDisplay = document.querySelector(".counter-display");
let counterMinus = document.querySelector(".counter-minus");
let counterPlus = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    if (count < 0) {
        counterDisplay.innerHTML = "0";
    } else {
    counterDisplay.innerHTML = count;
}
}


// PURCHASE BUTTON

const payment = document.getElementById("buy-text");
payment.innerHTML = "Buy Your Tickets Here!"

payment.addEventListener ('click' , ()=>{
    payment.innerHTML = "Confirming...";

    setTimeout(()=>{
        payment.innerHTML = "Payed!"
        alert(count + " ticket(s) purchase complete! Check e-mail for tickets.");
    },3000);
})