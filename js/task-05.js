const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

updateName();

function updateName() {
    if (inputName.value !== "") {
        outputName.textContent = inputName.value;
    } else {
        outputName.textContent = "Anonymous";
    }
}

inputName.addEventListener("input", updateName);
