const validInput = document.querySelector("#validation-input");

function validationInput() {
    if (
        validInput.dataset.length >= validInput.value.length &&
        validInput.value.length !== 0
    ) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    } else if (validInput.dataset.length < validInput.value.length) {
        validInput.classList.add("invalid");
        validInput.classList.remove("valid");
    }
}

validInput.addEventListener("blur", validationInput);
validInput.addEventListener("input", validationInput);
