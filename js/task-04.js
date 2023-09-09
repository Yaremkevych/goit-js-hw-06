let counter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

function updateCounter() {
    counter.textContent = counterValue;
}

const incrementClick = () => {
    counterValue++;
    updateCounter();
};

const decrementClick = () => {
    counterValue--;
    updateCounter();
};

incrementBtn.addEventListener("click", incrementClick);
decrementBtn.addEventListener("click", decrementClick);
